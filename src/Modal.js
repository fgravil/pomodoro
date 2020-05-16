import React from 'react';
import "./modal.css";

export default class Modal extends React.Component {
    render() {
        const {show, onClose, title, children, Footer} = this.props;

        return (
            show && <div id="myModal" class="modal" onClick={onClose}>
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <h3>{title}</h3>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                    <div class="modal-footer">
                        {Footer && Footer()}
                    </div>
                </div>
            </div>
        )
    }
}