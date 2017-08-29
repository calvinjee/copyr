import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import dashboardReducer from './dashboard_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
