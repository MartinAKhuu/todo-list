import 'jquery-match-height/dist/jquery.matchHeight-min.js';
import $ from 'jquery';

const matchHeightItems = () => {
    $(function () {
        $(".match-height-items").matchHeight();
    });
}

export default matchHeightItems;