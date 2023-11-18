import axios from 'axios';
import { cfg } from '../config/config';

axios.create({
	baseURL: cfg.apiUrl
});