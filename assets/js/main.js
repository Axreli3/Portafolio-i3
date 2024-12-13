import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyRightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import languageToggle from './helpers/Chang-Language.js'

loader();
resetToHome();
parallax();
activeMenu();
updateCopyRightYear();
sendEmail();
languageToggle();