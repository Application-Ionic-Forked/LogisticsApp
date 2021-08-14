import _ from 'lodash';
import { commonEnvironment } from './environment.common';

const localEnvironment: Partial<typeof commonEnvironment> = { };

export const environment = _.merge(localEnvironment, commonEnvironment);

import 'zone.js/dist/zone-error';
