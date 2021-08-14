import _ from 'lodash';
import { commonEnvironment } from './environment.common';

export const productionEnvironment: Partial<typeof commonEnvironment> = {
	production: true
};

export const environment = _.merge(productionEnvironment, commonEnvironment);
