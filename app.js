const allSigns = [
  {
    name: 'Aries',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100043.jpg',
  },
  {
    name: 'Taurus',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100026.jpg',
  },
  {
    name: 'Gemini',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100016.jpg',
  },
  {
    name: 'Cancer',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100005.jpg',
  },
  {
    name: 'Leo',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100020.jpg',
  },
  {
    name: 'Virgo',
    photo:
      'https://st3.depositphotos.com/thumbs/1477822/vector/33438/334382764/api_thumb_450.jpg?forcejpeg=true',
  },
  {
    name: 'Libra',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100002.jpg',
  },
  {
    name: 'Scorpio',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100007.jpg',
  },
  {
    name: 'Sagittarius',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100010.jpg',
  },
  {
    name: 'Capricorn',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100021.jpg',
  },
  {
    name: 'Aquarius',
    photo:
      'https://st3.depositphotos.com/thumbs/1477822/vector/33438/334382862/api_thumb_450.jpg?forcejpeg=true',
  },
  {
    name: 'Pisces',
    photo:
      'https://images.assetsdelivery.com/compings_v2/littlepaw/littlepaw2001/littlepaw200100024.jpg',
  },
];

const result = document.querySelector('.daily-results');
const list = document.querySelector('ul');
allSigns.forEach((sign, index) => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li>
    <input type="radio" value="${sign.name}" name="sign" id="rad${index}" />
    <label for="rad${index}"><img src="${sign.photo}" /></label>
    </li>
    `
  );
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelectorAll('input[type=radio]').forEach((item) => {
    if (item.checked) {
      let day = e.submitter.value
      let signValue = item.value;
      getDailyHoroscope(signValue, day);
    }
  });
});

function getDailyHoroscope(sign, day) {
  const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
  console.log();
  fetch(URL, {
    method: 'POST',
  })
    .then((response) => response.json())

    .then((data) => {
      result.innerHTML = `

    <h4>General Horoscope for ${sign}</h4>
    <p color="black" class="date">
    ${data.current_date}
    </p>
    <p class="description">
      ${data.description}
    </p>
    <div class="extra-info">
    <div class="info">
      <button style="color: #dc552c" class="info-button">#Mood</button>
      <p class="hidden"> 
        ${data.mood}
      </p>
    </div>
    <div class="info">      
    <button style="color: blue" class="info-button">#LuckyNumber</button>
      <p class="hidden">
        ${data.lucky_number}
      </p>
    </div>
    <div class="info">      
    <button style="color: #557669" class="info-button">#LuckyColor</button>
      <p class="hidden">
        ${data.color}
      </p>
    </div>
    </div>
    `;
    });
  result.innerHTML = 'Loading your results...';
}

window.addEventListener('click', (e) => {
  if (e.target.className === 'info-button') {
    e.target.nextElementSibling.className = '';
  }
});
