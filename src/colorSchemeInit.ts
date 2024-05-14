import { applyScheme, getSavedScheme, getSystemScheme } from './colorScheme';

applyScheme(getSavedScheme() || getSystemScheme());