/* Lit & More — site scripts */
(function () {
  // Mobile menu
  var header = document.querySelector('.hdr');
  var toggle = document.querySelector('.menu');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Contact form (one page, two parts)
  // NOTE: on submit this only shows the thank-you message. Connect the form
  // to your form handler or email service before going live.
  var form = document.getElementById('project-form');
  if (!form) return;
  var thanks = document.getElementById('form-thanks');
  var again = document.getElementById('form-again');

  function valid(part) {
    var ok = true;
    part.querySelectorAll('[required]').forEach(function (el) {
      var v = el.value.trim();
      var bad = !v || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      if (bad) { el.setAttribute('aria-invalid', 'true'); ok = false; }
      else { el.removeAttribute('aria-invalid'); }
    });
    var err = part.querySelector('.form-error');
    if (err) err.hidden = ok;
    return ok;
  }

  // Clear the red error state as soon as a field is corrected
  ['input', 'change'].forEach(function (evt) {
    form.addEventListener(evt, function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') e.target.removeAttribute('aria-invalid');
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var parts = form.querySelectorAll('.fstep');
    var ok = true;
    parts.forEach(function (p) { if (!valid(p)) ok = false; });
    if (!ok) {
      var firstBad = form.querySelector('[aria-invalid="true"]');
      if (firstBad) firstBad.focus();
      return;
    }
    form.hidden = true;
    thanks.hidden = false;
    thanks.focus();
  });

  if (again) {
    again.addEventListener('click', function () {
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
      form.querySelectorAll('.form-error').forEach(function (el) { el.hidden = true; });
      thanks.hidden = true;
      form.hidden = false;
    });
  }
})();
