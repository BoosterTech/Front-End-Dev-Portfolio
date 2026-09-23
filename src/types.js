/**
 * Central JSDoc types for the portfolio.
 * This file has no runtime exports; it only declares types for documentation and IDE support.
 */

/**
 * @typedef {'English'|'Polish'|'Spanish'} Language
 */

/**
 * @typedef {Object} LocalizedText
 * @property {string} English
 * @property {string} Polish
 * @property {string} Spanish
 */

/**
 * @typedef {Object} LocalizedRecord
 * @property {string} English
 * @property {string} Polish
 * @property {string} Spanish
 */

/**
 * @typedef {Object} Project
 * @property {LocalizedText} title
 * @property {LocalizedText} description
 * @property {string} imageURL
 * @property {string} GitHubPagesURL
 * @property {string} GitHubRepoURL
 * @property {LocalizedText} [GitHubPagesURLTag]
 * @property {LocalizedText} [GitHubRepoURLTag]
 * @property {boolean} [inverted]
 * @property {boolean} [border]
 * @property {string} [variant]
 * @property {string} [available]
 * @property {string[]} [technologies]
 */

/**
 * @typedef {Object} TranslationSet
 * @property {Object} home
 * @property {Object} about
 * @property {Object} contact
 * @property {Object} footer
 */

/**
 * @typedef {Object} LanguageState
 * @property {Language} language
 */

/**
 * @typedef {Object} GeneralState
 */
