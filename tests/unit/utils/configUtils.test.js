import fs from 'fs/promises';
import path from 'path';
import {parseDataset, validateConfig} from '../../../src/utils/configUtils.js';


describe('Configuration Parsing and Validation', () => {
	let originalConfig;
	let htmlDataset;

	beforeAll(async () => {
		const originalConfigPath = path.join(__dirname, '../fixtures', 'sample-conf.json');
		const configContent = await fs.readFile(originalConfigPath, 'utf8');
		originalConfig = JSON.parse(configContent);
		originalConfig.maps["apiKey"] = "fake-apikey";
		htmlDataset = {apiKey: "fake-apikey"};
		Object.keys(originalConfig).forEach(keyRoot => {
			htmlDataset[keyRoot] = JSON.stringify(originalConfig[keyRoot]);
		});
	});

	it('should validate configuration correctly', async () => {
		const validatedConfig = await validateConfig(originalConfig);
		expect(validatedConfig).toEqual(originalConfig);
	});

	it('should parse dataset from HTML correctly', async () => {
		const parsedDataset = await parseDataset(htmlDataset);
		// Assuming you want to compare the parsed dataset to some aspect of originalConfig or another expected value
		expect(parsedDataset).toEqual(originalConfig); // Replace expect.anything() with a more specific expectation based on your requirements
	});
});
