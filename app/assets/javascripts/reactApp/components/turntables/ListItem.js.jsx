import React                   from 'react';
import TurntablesTrackDisplayContainer from '../../containers/turntables/track/Display.js.jsx';
import TurntablesTrackTimeContainer from '../../containers/turntables/track/Time.js.jsx';
import TurntablesTrackWaveformContainer from '../../containers/turntables/track/Waveform.js.es6';
import TurntablesTrackControlsContainer from '../../containers/turntables/track/Controls.js.es6';
import TurntableSchema         from '../../schemas/turntable.js.es6';

const TurntablesListItem = ({ id, track, optionalClasses }) => (
  <div className="col-xs-12 col-md-6">
    <div className={`row turntable-container ${optionalClasses}`}>
      <div className="col-xs-12 section console">
        <TurntablesTrackDisplayContainer  {...track} />
        <TurntablesTrackTimeContainer     {...track} />
        <TurntablesTrackWaveformContainer {...track} />
        <TurntablesTrackControlsContainer {...track} turntableId={id} />
      </div>
    </div>
  </div>
);

TurntablesListItem.propTypes    = TurntableSchema.PropTypes.isRequired;
TurntablesListItem.defaultProps = TurntableSchema.Defaults;

export default TurntablesListItem;