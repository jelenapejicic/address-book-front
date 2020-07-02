import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import 'regenerator-runtime/runtime'

configure({adapter: new Adapter()});
