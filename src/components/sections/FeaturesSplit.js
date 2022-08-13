import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Gallery from '../elements/Gallery';
const data = [{
	id: 1,
	name: "Island",
	image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
}, {
	id: 2,
	name: "Forest",
	image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
}, {
	id: 3,
	name: "Whale",
	image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
}, {
	id: 4,
	name: "Mountain",
	image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
}, {
	id: 5,
	name: "Boat",
	image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
}, {
	id: 6,
	name: "Flowers",
	image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
}, {
	id: 7,
	name: "Fire",
	image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
}, {
	id: 8,
	name: "Garden",
	image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
}, {
	id: 9,
	name: "Bridge",
	image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
}];

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Why DLC',
    paragraph: 'Leaders are lonely at the top and we want to challenge this status quo. It is our mission to create a global community of Transformative Leaders. We believe DLC will be the catalyst to transform leaders from',
    author:'JIMMY MISTRY || FOUNDER & CEO'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                WHAT IS DLC?
                  </h3>
                <p className="m-0">
                DLC is the World’s 1st Business Platform that offers a 360-degree support system for Entrepreneurs, Professionals, & Young Leaders. The platform gives access to first-degree connects and knowledge content from 2500+ men and women of eminence across 26 domains (13 business and 13 lifestyle) to keep you ahead of the curve.

DLC offers its members access to personalized Forum, access to peer-to-peer learning via its proprietary DLC Channel, exclusive invites to DLC Events, access to exclusive Brand Collaborations, and an opportunity to associate with member curated programs designed to create a meaningful Social Impact
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/meet.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                WHO IS DLC FOR?
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/meet.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                DLC INTELLECT POP-UP
                  </h3>
                <p className="m-0">
                Conceptualised as a melting pot of ideas from the world of Business, Art & Entertainment. It's an event that celebrates the passion of Entrepreneurs, Professionals & Young Leaders
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/meet.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <h3 className="mt-0 mb-12 center-content">
                 DLC GLOBAL COMMUNITY
                  </h3>
        <Gallery data={data} />
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;