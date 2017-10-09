/**
 * WordPress Dependeencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import Popover from '../popover';

class Dropdown extends Component {
	constructor() {
		super( ...arguments );
		this.toggle = this.toggle.bind( this );
		this.close = this.close.bind( this );
		this.clickOutside = this.clickOutside.bind( this );
		this.bindContainer = this.bindContainer.bind( this );
		this.state = {
			isOpen: false,
		};
	}

	bindContainer( ref ) {
		this.container = ref;
	}

	toggle() {
		this.setState( ( state ) => ( {
			isOpen: ! state.isOpen,
		} ) );
	}

	clickOutside( event ) {
		if ( ! this.container.contains( event.target ) ) {
			this.close();
		}
	}

	close() {
		this.setState( { isOpen: false } );
	}

	render() {
		const { isOpen } = this.state;
		const { renderContent, renderToggle, position = 'bottom', className, contentClassName } = this.props;
		const args = { isOpen, onToggle: this.toggle, onClose: this.close };
		return (
			<div className={ className } ref={ this.bindContainer }>
				{ renderToggle( args ) }
				<Popover
					className={ contentClassName }
					isOpen={ isOpen }
					position={ position }
					onClickOutside={ this.clickOutside }
				>
					{ renderContent( args ) }
				</Popover>
			</div>
		);
	}
}

export default Dropdown;