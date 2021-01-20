// import React...
import React from 'react';

// import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
// import { sampleData, displayDate } from './data/events-utc-.js';
// import { Day } from '@progress/kendo-date-math';
// import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
import { sampleDataWithResources, displayDate } from './data/events-utc-group.js';

import '@progress/kendo-theme-default/dist/all.css';
   
const ExampleComponent = () => {
  const [orientation, setOrientation] = React.useState('vertical');

    const handleOrientationChange = React.useCallback(
        (event) => { setOrientation(event.target.value) },
        [setOrientation]
    );

  return (
    <div className="page-content">
      <div className="page-header">
      <h1>
                        Top Menu Style
                    <small>
                            <i className="ace-icon fa fa-angle-double-right" />
                            top menu &amp; navigation
                    </small>
                    </h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
        {/* <Scheduler
              data={sampleData}
              defaultDate={displayDate}
          >
              <TimelineView
                  title="Hour-By-Hour"

                  numberOfDays={2}

                  columnWidth={100}
                  slotDuration={60}
                  slotDivisions={1}

                  startTime={"08:00"}
                  endTime={"18:00"}

                  workDayStart={"09:00"}
                  workDayEnd={"17:00"}

                  workWeekStart={Day.Sunday}
                  workWeekEnd={Day.Monday}

                  showWorkHours={false}
              />
          </Scheduler> */}
          <label>
                      Horizontal &nbsp;
                      <input type="radio" value="horizontal" checked={orientation === 'horizontal'} onChange={handleOrientationChange} />
                  </label>
                  &nbsp;
              <label>
                      Vertical &nbsp;
                      <input type="radio" value="vertical" checked={orientation === 'vertical'} onChange={handleOrientationChange} />
                  </label>
              </div>
              <Scheduler
                  data={sampleDataWithResources}
                  defaultDate={displayDate}
                  group={{
                      resources: ['Rooms', 'Persons'],
                      orientation
                  }}
                  resources={[
                      {
                          name: 'Rooms',
                          data: [
                              { text: 'Meeting Room 101', value: 1 },
                              { text: 'Meeting Room 201', value: 2, color: 'green' }
                          ],
                          field: 'roomId',
                          valueField: 'value',
                          textField: 'text',
                          colorField: 'color'
                      },
                      {
                          name: 'Persons',
                          data: [
                              { text: 'Peter', value: 1, color: 'red' },
                              { text: 'Alex', value: 2 }
                          ],
                          field: 'personId',
                          valueField: 'value',
                          textField: 'text',
                          colorField: 'color'
                      }]}
              >
                  <TimelineView
                      title="Hour-By-Hour"

                      columnWidth={100}
                      slotDuration={120}
                      slotDivisions={1}
                      numberOfDays={2}

                      workDayStart={"08:00"}
                      workDayEnd={"18:00"}
                  />
              </Scheduler>
        </div>
    </div>
  )
}

export default ExampleComponent
  