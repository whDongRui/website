import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { omit } from 'lodash'

import styles from './index.module.scss'

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    closable: PropTypes.bool,
    isOpen: PropTypes.bool,
    width: PropTypes.number,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    closable: true,
    isOpen: false,
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const { width, isOpen, children, closable, className, style, ...rest }  = this.props

    const customStyles = {
      content: {
        width: width,
      },
    }

    return (
      <ReactModal
        ariaHideApp={false}
        className={classnames(styles.modal, className)}
        style={Object.assign(customStyles, style)}
        isOpen={isOpen}
        onRequestClose={this.onClose}
        shouldCloseOnOverlayClick
        {...rest}
      >
        <div className={styles.header}>
          {closable && (
            <img
              onClick={this.onClose}
              src="/images/modal/close.svg"
              className={styles.close}
            />
          )}
        </div>
        <div className={styles.body}>{children}</div>
      </ReactModal>
    )
  }
}
