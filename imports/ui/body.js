/**
 * Created by [babushkine@digicode.net] on 4/11/17.
 */
import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        {text: 'This is task 1'},
        {text: 'This is task 2'},
        {text: 'This is task 3'}
    ]
});