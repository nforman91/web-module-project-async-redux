import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTeams, fetchFail } from '../actions';

const Teams = (props) => {
    const { teams, isFetching, error, getTeams } = props;

    useEffect(() => {
        getTeams();
    }, [getTeams]);

    if(error){
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching team...</h2>;
    }

    const handleClick = () => {
        getTeams();
    }

    return(
        <div>
        {teams && <div>
            <h2>Team Name: {teams.name}</h2>
            <p>Conference: {teams.conference.name}</p>
            <p>Division: {teams.division.name}</p>
            <a href={teams.officialSiteUrl} target='_blank' rel='noreferrer'>Official Site</a>
            </div>}
            <br/>
            <button onClick={handleClick}>Get New Team</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getTeams, fetchFail })(Teams);