const size = {
	mobileMedium: '375px',
	landscape_phones: '568px',
	tablet: '600px',
	laptop: '843px',
	desktop: '1200px',
	big_desktop: '1800px',
};

export const device = {
	mobileMedium: `(min-width: ${size.mobileMedium})`,
	landscape_phones: `(min-width: ${size.landscape_phones}) and (orientation: landscape)`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`,
	big_desktop: `(min-width: ${size.big_desktop})`,
};
