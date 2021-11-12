//npm i parcel
//npx parcel index.html

import EditorJS from '@editorjs/editorjs'
//npm i --save @editorjs/editorjs 
import Header from '@editorjs/header'
//npm i --save @editorjs/header
import Paragraph from '@editorjs/paragraph'
//npm i --save @editorjs/paragraph
import List from '@editorjs/list'
//npm i --save @editorjs/list
import Embed from '@editorjs/embed'
//npm i --save-dev @editorjs/embed
import Delimiter from '@editorjs/delimiter' //const Delimiter = require('@editorjs/delimiter');
//npm i --save-dev @editorjs/delimiter




const editor = new EditorJS({

	holderId: 'editorjs',
	placeholder: 'Lets write',

	tools: {
		header: {
			class: Header,
			config:{
				placeholder:'Enter a header',
				levels:[1,2,3],
				defaultLevel:1
			}
		},
		paragraph: {
	      class: Paragraph,
	      inlineToolbar: true,
	    },
	    list: {
	      class: List,
	      inlineToolbar: true,
	    },
	     embed: {
	      class: Embed,
	      config: {
	        services: {
	          youtube: true,
	          coub: true
	        }
	      }
	    },
	    delimiter: Delimiter,
	}
})

let saveBtn = document.querySelector('button')

saveBtn.addEventListener('click', function() {
	editor.save().then((outputData) => {
		console.log('Article data: ', outputData)
	})
})