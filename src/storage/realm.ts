import Realm from 'realm';
import { User } from '../models/User';

const realm = new Realm({ schema: [User] });

export default realm;
