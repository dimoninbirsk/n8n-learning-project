// eslint-disable-next-line n8n-nodes-base/node-filename-against-convention
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
/* eslint-disable n8n-nodes-base/node-param-resource-with-plural-option */
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TestApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TestApi',
		name: 'TestApi',
		icon: 'file:nasapics.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from my API',
		defaults: {
			name: 'TestApi',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'TestApi',
				required: false,
			},
		],
		requestDefaults: {
			//baseURL: 'http://localhost:3000',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get users',
						value: 'getUsers',
					},
				],
				default: 'getUsers',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'getUsers',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get users',
						description: 'Get users from cite',
						routing: {
							request: {
								method: 'GET',
								url: 'http://localhost:3000/api/contacts',
							},
						},
					},
				],
				default: 'get',
			},
		],
	};
}
