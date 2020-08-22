const pkg = require('./package.json')

module.exports = {
  locals: {
    title: pkg.title,
    description: pkg.description,
    aboutPage: {
      aboutLink: 'About',
      contributeLink: 'Contribute',
      contactLink: 'Contact',
      aboutText:
        'I believe no one should be subjected to hostility and ill-treatment, especially because of their race, political or religious beliefs. As I am unable to help directly those being persecuted, but I can use the skills I have to raise awareness and hopefully reach enough people. Together we have a strong voice and can hold accountable those responsible for such hedious crimes.',
      aboutTextCredits:
        'The main illustration is the work of <a href="https://www.behance.net/taniamatoss" target="_blank" rel="noopener noreferrer">Tania Matos</a>. Some SVGs have been used from <a href="https://svgsilh.com" target="_blank" rel="noopener noreferrer">svgsilh.com</a>, released under Creative Commons CC0.',
    },
    copyrightNotice:
      'Copyright © 2020 João Carmo, Tania Matos. Some Rights Reserved.',
  },
}
