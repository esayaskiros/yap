import React from 'react'
import CMS from 'netlify-cms'
import { StyleSheetManager } from 'styled-components'
import SliderPreview from './preview-templates/sliderPreview'
import EventsPreview from './preview-templates/eventsPreview'
import LandingTextPreview from './preview-templates/landingTextPreview'
import LandingCardsPreview from './preview-templates/landingCardsPreview'
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    )
  }
}
CMS.registerPreviewTemplate('events', props => (
  <CSSInjector>
    <EventsPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('slider', props => (
  <CSSInjector>
    <SliderPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('landingText', props => (
  <CSSInjector>
    <LandingTextPreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('landingCards', props => (
  <CSSInjector>
    <LandingCardsPreview {...props} />
  </CSSInjector>
))
