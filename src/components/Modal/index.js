import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from "prop-types";
import Modal from "react-modal";
import Captcha from "../Captcha";
import { FocusError, FormButtons, FormGroup } from "../Form";
import MaterialIcon from "../MaterialIcon";
import { ModalSavedItemList } from "../SavedItem";
import "./styles.scss"


const MyListModal = (props) => (
  <Modal
    appElement={props.appElement ? props.appElement : Modal.setAppElement("#root")}
    isOpen={props.isOpen}
    onRequestClose={props.toggleModal}
    className="modal-content"
    overlayClassName="modal-overlay">
    <div className="modal-header">
      <h2 className="modal-header__title">{props.title}</h2>
      <button className="modal-header__button" aria-label="Close" onClick={props.toggleModal}>
        <MaterialIcon icon="close"/>
      </button>
    </div>
    <div className="modal-body">
      <div className="modal-list">
        <ModalSavedItemList items={props.list} />
      </div>
      <div className="modal-form">
        {props.form}
      </div>
    </div>
  </Modal>
)

MyListModal.propTypes = {
  appElement: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export class EmailModal extends Component {
  componentDidMount() {
    this.props.loadListData("http://request-broker/api/process-request/email");
  }
  render() {
    return (
      <MyListModal
        appElement={this.props.appElement}
        title="Email List"
        isOpen={this.props.isOpen}
        toggleModal={this.props.toggleModal}
        list={this.props.list}
        form={
          <Formik
            initialValues={{email: "", subject: "", message: "", recaptcha: ""}}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'An email address is required.';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address provided.';
              }
              if (!values.recaptcha) {
                errors.recaptcha = 'Please complete this field.';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.handleFormSubmit("http://request-broker/api/deliver-request/email", values);
              setSubmitting(false);
            }}
          >
          {({ errors, isSubmitting, setFieldValue, touched }) => (
            <Form>
              <FormGroup
                label="Email *"
                name="email"
                type="email"
                required={true}
                errors={errors}
                touched={touched} />
              <FormGroup
                label="Subject"
                name="subject"
                type="text" />
              <FormGroup
                label="Message"
                name="message"
                component="textarea"
                rows={5} />
              <Field
                component={Captcha}
                name="recaptcha"
                handleCaptchaChange={(response) => setFieldValue("recaptcha", response)} />
              <ErrorMessage
                id="recaptcha-error"
                name="recaptcha"
                component="div"
                className="modal-form__error" />
              <FormButtons
                submitText="Send List"
                toggleModal={this.props.toggleModal}
                isSubmitting={isSubmitting} />
              <FocusError />
            </Form>
          )}
          </Formik>
        }
      />
    )
  }
}

EmailModal.propTypes = {
  appElement: PropTypes.object,
  handleFormSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  loadListData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export class ReadingRoomRequestModal extends Component {
  componentDidMount() {
    this.props.loadListData("http://request-broker/api/process-request/parse")
  }
  render() {
    return (
      <MyListModal
        appElement={this.props.appElement}
        title="Request in Reading Room"
        isOpen={this.props.isOpen}
        toggleModal={this.props.toggleModal}
        list={this.props.list}
        form={
          <Formik
            initialValues={{scheduledDate: "", questions: "", notes: "", recaptcha: ""}}
            validate={values => {
              const errors = {};
              if (!values.scheduledDate) errors.scheduledDate = 'Please provide the date of your research visit.';
              if (!values.recaptcha) errors.recaptcha = 'Please complete this field.';
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.handleFormSubmit("http://request-broker/api/deliver-request/reading-room", values);
              setSubmitting(false);
            }}
          >
          {({ errors, isSubmitting, setFieldValue, touched }) => (
            <Form>
              <FormGroup
                label="Scheduled Date *"
                helpText="Enter the date of your research visit"
                name="scheduledDate"
                type="date"
                required={true}
                errors={errors}
                touched={touched} />
              <FormGroup
                label="Special Requests/Questions for RAC staff"
                helpText="255 characters maximum"
                name="questions"
                maxLength={255}
                component="textarea"
                rows={5} />
              <FormGroup
                label="Notes for Personal Reference"
                helpText="255 characters maximum"
                name="notes"
                maxLength={255}
                component="textarea"
                rows={5} />
              <Field
                component={Captcha}
                name="recaptcha"
                handleCaptchaChange={(response) => setFieldValue("recaptcha", response)} />
              <ErrorMessage
                id="recaptcha-error"
                name="recaptcha"
                component="div"
                className="modal-form__error" />
              <FormButtons
                submitText={`Request ${this.props.list.length ? (this.props.list.length) : ""} Items`}
                toggleModal={this.props.toggleModal}
                isSubmitting={isSubmitting} />
              <FocusError />
            </Form>
          )}
          </Formik>
        }
      />
    )
  }
}

ReadingRoomRequestModal.propTypes = {
  appElement: PropTypes.object,
  handleFormSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  loadListData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}


export class DuplicationRequestModal extends Component {
  componentDidMount() {
    this.props.loadListData("http://request-broker/api/process-request/parse")
  }
  render() {
    return (
      <MyListModal
        appElement={this.props.appElement}
        title="Request Copies"
        isOpen={this.props.isOpen}
        toggleModal={this.props.toggleModal}
        list={this.props.list}
        form={
          <Formik
            initialValues={{
              format: "",
              description: "Entire folder",
              questions: "",
              notes: "",
              costs: false,
              recaptcha: ""}}
            validate={values => {
              const errors = {};
              if (!values.format) errors.format = 'Please select your desired duplication format.';
              if (!values.recaptcha) errors.recaptcha = 'Please complete this field.';
              if (!values.costs) errors.costs = "We cannot process your request unless you agree to pay the costs of reproduction.";
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.handleFormSubmit("http://request-broker/api/deliver-request/duplication", values);
              setSubmitting(false);
            }}
          >
          {({ errors, isSubmitting, setFieldValue, touched }) => (
            <Form>
              <FormGroup
                label="Format *"
                name="format"
                component="select"
                children={[
                  <option key="1" value="">Select a format</option>,
                  <option key="2" value="JPEG">JPEG</option>,
                  <option key="3" value="PDF">PDF</option>,
                  <option key="4" value="Photocopy">Photocopy</option>,
                  <option key="5" value="TIFF">TIFF</option>]}
                required={true}
                errors={errors}
                touched={touched} />
              <FormGroup
                label="Description of Materials"
                helpText="Please describe the materials you want reproduced. 255 characters maximum."
                name="description"
                maxLength={255}
                component="textarea"
                rows={5} />
              <FormGroup
                label="Special Requests/Questions for RAC staff"
                helpText="255 characters maximum."
                maxLength={255}
                name="questions"
                component="textarea"
                rows={5} />
              <FormGroup
                label="Notes for Personal Reference"
                helpText="255 characters maximum."
                maxLength={255}
                name="notes"
                component="textarea"
                rows={5} />
              <FormGroup
                label={<>I agree to pay the duplication costs for this request. See our <a href="https://rockarch.org/collections/access-and-request-materials/#duplication-services-and-fee-schedule">fee schedule</a></>}
                name="costs"
                type="checkbox"
                required={true}
                errors={errors}
                touched={touched} />
              <Field
                component={Captcha}
                name="recaptcha"
                handleCaptchaChange={(response) => setFieldValue("recaptcha", response)} />
              <ErrorMessage
                id="captcha-error"
                name="recaptcha"
                component="div"
                className="modal-form__error" />
              <FormButtons
                submitText={`Request ${this.props.list.length ? (this.props.list.length) : ""} Items`}
                toggleModal={this.props.toggleModal}
                isSubmitting={isSubmitting} />
              <FocusError />
            </Form>
          )}
          </Formik>
        }
      />
    )
  }
}

DuplicationRequestModal.propTypes = {
  appElement: PropTypes.object,
  handleFormSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  loadListData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
