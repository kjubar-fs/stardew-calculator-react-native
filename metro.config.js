/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 5:08:50 PM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;