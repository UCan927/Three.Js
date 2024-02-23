import { UIPanel } from './libs/ui.js';

function MenubarHome( editor ) {

	const strings = editor.strings;


	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/home' ) );
	title.onClick( function () {

		if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

			window.open( '/', '_self' );

		}

	} );
	container.add( title );

	return container;

}

export { MenubarHome };
