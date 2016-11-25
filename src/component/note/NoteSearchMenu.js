/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modalController';
import {search_change} from '../../actions/noteController';
import {FormControl,FormGroup,DropdownButton,MenuItem ,Button} from 'react-bootstrap';
import styles from './note.css';

class NoteSearchMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			query:''
		}
	}

	handleChange(e){
		this.props.search_change(e.target.value);
	}



	render() {
		return (
			<div>
				<FormGroup>

					<FormControl type="search" value={this.props.note_query} onChange={this.handleChange.bind(this)} className={styles.searchbox} placeholder="Search" />
					<DropdownButton bsSize="small" title="Options   " id={styles.menuoption+" bg-vertical-dropdown-2"} noCaret className={styles.right+" "+styles.menuoption}>
						<h5 className={styles.sortbytext}>Sort By</h5>
						<MenuItem eventKey="1">Created Date (Ascending)</MenuItem>
						<MenuItem eventKey="2">Created Date (Descending)</MenuItem>
						<MenuItem eventKey="3">Update Date (Ascending)</MenuItem>
						<MenuItem eventKey="4">Update Date (Descending)</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey="5">Show Text <i className={styles.right+" fa fa-check "} aria-hidden="true" ></i></MenuItem>
					</DropdownButton>

					<Button className={styles.right+" "+styles.addbutton} bsStyle={'primary'} onClick={()=>this.props.openModal('addNote')}><i className="fa fa-plus" aria-hidden="true"></i></Button>
				</FormGroup>
				<hr/>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		note_query:state.note.note_query
	};
}

export default connect(mapStateToProps,{openModal,search_change})(NoteSearchMenu);

