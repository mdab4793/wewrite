//https://deeplify.dev/front-end/js/timer-functions  타임아웃 참고
function footerTime() {
  var template = `<footer class="footer">
    <img src="https://github.com/mdab4793/shop/blob/main/instagram%20(1).png?raw=true" href="" />
    <span>instagram</span>
    <br />
    <br />
    <p>Contact webmaster for more information. 010-1234-5678</p>
    </footer>
    `;
  $('.footer-container').append(template);
}

var timeoutId = setTimeout(footerTime, 1300);
