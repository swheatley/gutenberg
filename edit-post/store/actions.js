
/**
 * Returns an action object used in signalling that the user switched the active
 * sidebar tab panel.
 *
 * @param  {string} sidebar Sidebar name
 * @param  {string} panel   Panel name
 * @return {Object}         Action object
 */
export function setGeneralSidebarActivePanel( sidebar, panel ) {
	return {
		type: 'SET_GENERAL_SIDEBAR_ACTIVE_PANEL',
		sidebar,
		panel,
	};
}

/**
 * Returns an action object used in signalling that the user opened a sidebar.
 *
 * @param {string} sidebar        Sidebar to open.
 * @param {string} [panel = null] Panel to open in the sidebar. Null if unchanged.
 * @return {Object}              Action object.
 */
export function openGeneralSidebar( sidebar, panel = null ) {
	return {
		type: 'OPEN_GENERAL_SIDEBAR',
		sidebar,
		panel,
	};
}

/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action object.
 */
export function closeGeneralSidebar() {
	return {
		type: 'CLOSE_GENERAL_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */
export function openPublishSidebar() {
	return {
		type: 'OPEN_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */
export function closePublishSidebar() {
	return {
		type: 'CLOSE_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user toggles the publish sidebar
 *
 * @return {Object} Action object
 */
export function togglePublishSidebar() {
	return {
		type: 'TOGGLE_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that use toggled a panel in the editor.
 *
 * @param {string}  panel The panel to toggle.
 * @return {Object} Action object.
*/
export function toggleGeneralSidebarEditorPanel( panel ) {
	return {
		type: 'TOGGLE_GENERAL_SIDEBAR_EDITOR_PANEL',
		panel,
	};
}

/**
 * Returns an action object used to toggle a feature flag.
 *
 * @param {string} feature Featurre name.
 *
 * @return {Object} Action object.
 */
export function toggleFeature( feature ) {
	return {
		type: 'TOGGLE_FEATURE',
		feature,
	};
}

export function switchEditorMode( mode ) {
	return {
		type: 'SWITCH_MODE',
		mode,
	};
}

/**
 * Returns an action object used to check the state of meta boxes at a location.
 *
 * This should only be fired once to initialize meta box state. If a meta box
 * area is empty, this will set the store state to indicate that React should
 * not render the meta box area.
 *
 * Example: metaBoxes = { side: true, normal: false }.
 *
 * This indicates that the sidebar has a meta box but the normal area does not.
 *
 * @param {Object} metaBoxes Whether meta box locations are active.
 *
 * @return {Object} Action object.
 */
export function initializeMetaBoxState( metaBoxes ) {
	return {
		type: 'INITIALIZE_META_BOX_STATE',
		metaBoxes,
	};
}

/**
 * Returns an action object used to request meta box update.
 *
 * @return {Object}      Action object.
 */
export function requestMetaBoxUpdates() {
	return {
		type: 'REQUEST_META_BOX_UPDATES',
	};
}

/**
 * Returns an action object used signal a successfull meta nox update.
 *
 * @return {Object} Action object.
 */
export function metaBoxUpdatesSuccess() {
	return {
		type: 'META_BOX_UPDATES_SUCCESS',
	};
}

/**
 * Returns an action object used set the saved meta boxes data.
 * This is used to check if the meta boxes have been touched when leaving the editor.
 *
 * @param   {Object} dataPerLocation Meta Boxes Data per location.
 * @return {Object}                 Action object.
 */
export function setMetaBoxSavedData( dataPerLocation ) {
	return {
		type: 'META_BOX_SET_SAVED_DATA',
		dataPerLocation,
	};
}
