import React from 'react';
import TeamMatchRecordOffense from'./TeamMatchRecordOffense';
import TeamMatchRecordDefense from'./TeamMatchRecordDefense';


const body = () => {
    return(
      <div>
        <div>
            <TeamMatchRecordOffense/>
        </div>
        <div>
           <TeamMatchRecordDefense/>
        </div>
          
      </div>
    )
  }
  
  export default body;