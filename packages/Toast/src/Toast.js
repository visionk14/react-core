import React from 'react'
import PropTypes from 'prop-types'
export { toast } from 'react-toastify'
import { Provider } from '@react-core/theme-provider'
import { ToastContainer as ToastifyContainer } from 'react-toastify'
import toastifyStyle from './Toast.style.scss';

export const ToastContainer = ({ theme, ...rest }) => (
  <Provider
    theme={theme}
    componentName={'Toast'}
    render={({ style }) => (
      <div>
        <ToastifyContainer {...rest} />
        <style jsx global>
          {style}
        </style>
        <style jsx global>
          {toastifyStyle}
        </style>
      </div>
    )}
  />
)

ToastContainer.propTypes = {
  theme: PropTypes.object
}
