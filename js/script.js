document.addEventListener('DOMContentLoaded', function () {
  const textToggleBtn = document.getElementById('textToggleBtn');
  const toggleInfoBtn = document.getElementById('toggleInfoBtn');
  const additionalInfo = document.getElementById('additionalInfo');

  if (textToggleBtn) {
    textToggleBtn.addEventListener('click', function () {
      this.textContent =
        this.textContent === 'Click Me!' ? 'Thanks for Clicking!' : 'Click Me!';
    });
  }

  if (toggleInfoBtn && additionalInfo) {
    toggleInfoBtn.addEventListener('click', function () {
      additionalInfo.classList.toggle('hidden');
      toggleInfoBtn.textContent =
        additionalInfo.classList.contains('hidden') ? 'Show More' : 'Hide Info';
    });
  }

  const aboutTextToggleBtn = document.getElementById('aboutTextToggleBtn');
  const aboutToggleInfoBtn = document.getElementById('aboutToggleInfoBtn');
  const aboutAdditionalInfo = document.getElementById('aboutAdditionalInfo');

  if (aboutTextToggleBtn) {
    aboutTextToggleBtn.addEventListener('click', function () {
      this.textContent =
        this.textContent === 'Click Me!' ? 'Great Job you Just clicked Me!!!' : 'Click Me!';
    });
  }

  if (aboutToggleInfoBtn && aboutAdditionalInfo) {
    aboutToggleInfoBtn.addEventListener('click', function () {
      aboutAdditionalInfo.style.display =
        aboutAdditionalInfo.style.display === 'none' || aboutAdditionalInfo.style.display === ''
          ? 'block'
          : 'none';
      aboutToggleInfoBtn.textContent =
        aboutAdditionalInfo.style.display === 'block' ? 'Hide Info' : 'Show More Info';
    });
  }
});