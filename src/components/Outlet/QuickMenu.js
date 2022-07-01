import { React } from 'react';
import './QuickMenu.scss';
import $ from 'jquery';
function QuickMenu() {
    $(document).ready(function () {
        var currentPosition = parseInt($('.quickmenu').css('top'));
        $(window).scroll(function () {
            var position = $(window).scrollTop();
            $('.quickmenu')
                .stop()
                .animate({ top: position + currentPosition + 'px' }, 1000);
        });
    });
  return (
    <div className="quickmenu">
      <ul>
        <li>
          <a href="#">등급별혜택</a>
        </li>
        <li>
          <a href="#">1:1문의</a>
        </li>
        <li>
          <a href="#">후기</a>
        </li>
      </ul>
    </div>
  );
}

export default QuickMenu;
