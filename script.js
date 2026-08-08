const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Sign-up path toggle (student / tutor)
const tabStudent = document.getElementById('tabStudent');
const tabTutor = document.getElementById('tabTutor');
const formStudent = document.getElementById('formStudent');
const formTutor = document.getElementById('formTutor');

if (tabStudent && tabTutor) {
  tabStudent.addEventListener('click', () => {
    formStudent.classList.remove('is-hidden');
    formTutor.classList.add('is-hidden');
    tabStudent.classList.add('is-active');
    tabTutor.classList.remove('is-active');
  });

  tabTutor.addEventListener('click', () => {
    formTutor.classList.remove('is-hidden');
    formStudent.classList.add('is-hidden');
    tabTutor.classList.add('is-active');
    tabStudent.classList.remove('is-active');
  });
}

// Avatar picker highlight
document.querySelectorAll('.avatar-grid').forEach((grid) => {
  grid.addEventListener('change', (e) => {
    grid.querySelectorAll('.avatar-option').forEach((opt) => opt.classList.remove('is-selected'));
    e.target.closest('.avatar-option').classList.add('is-selected');
  });
});