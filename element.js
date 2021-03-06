/**
 * <audio-speaker> html element
 *
 * Does not export anything as it is not a module, it is pre-cooked web-component.
 *
 * To make it work, browserify bundle first with dependencies:
 * `browserify -r audio-element -r audio-speaker`
 * and connect it before the import link:
 * <link rel="import" href="./node_modules/audio-speaker"/>
 *
 * @module  audio-speaker/element
 */
'use strict';

var Speaker = require('audio-speaker');
var AudioElement = require('audio-element');


/**
 * Audio speaker element API
 */
var SpeakerProto = Object.create(AudioElement.prototype);

SpeakerProto.createdCallback = function () {
	this.stream = Speaker();

	AudioElement.prototype.createdCallback.call(this);
};


/** Meta */
SpeakerProto.label = 'Speaker';
SpeakerProto.thumbnail = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 100 75"><path d="M6.988 16.6C2.132 16.6 0 28.03 0 36.8c0 8.77 2.275 19.938 6.456 19.938h10.878c6.448 0 16.465 10.998 21.532 15.22 3.643 3.034 9.998 1.95 9.998-4.502l.013-61.602c0-6.22-6.412-7.25-10.007-4.08-5.262 4.635-14.946 14.822-21.267 14.822H6.988zM69.578 13.668c-1.904-1.882-4.93-1.882-6.842.013-1.888 1.892-1.888 4.944.01 6.842v-.01c4.173 4.175 6.75 9.907 6.75 16.266 0 6.347-2.568 12.065-6.74 16.23-1.908 1.905-1.908 4.954-.01 6.865.934.94 2.17 1.416 3.416 1.416 1.247 0 2.522-.478 3.428-1.417 5.898-5.905 9.566-14.093 9.566-23.08.005-9.027-3.676-17.227-9.578-23.125z"/><path d="M85.324 1.463c-1.97-1.95-5.094-1.95-7.057 0-1.96 1.952-1.96 5.116 0 7.058C85.51 15.76 90.02 25.726 90.02 36.776s-4.47 20.996-11.744 28.25c-1.973 1.945-1.973 5.093 0 7.053.942.965 2.252 1.467 3.538 1.467 1.28 0 2.6-.503 3.53-1.467 9.043-9.036 14.67-21.533 14.657-35.303-.043-13.765-5.638-26.292-14.676-35.312z"/></svg>';
SpeakerProto.description = 'Output the sound';


/** Connection logic */
SpeakerProto.numberOfOutputs = 0;
SpeakerProto.numberOfInputs = 1;


document.registerElement('audio-speaker', {
	prototype: SpeakerProto
});
