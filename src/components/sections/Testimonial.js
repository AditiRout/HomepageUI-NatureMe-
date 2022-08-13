import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'GLOBAL SOCIAL IMPACT PROGRAMS',
    //paragraph: 'JOIN THE LEAGUE OF EXTRAORDINARY INDIVIDUALS'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas magna risus, et cursus nibh consectetur vitae. Nulla pretium feugiat volutpat. Nunc semper eleifend tortor. Ut vitae facilisis purus. Proin id ipsum elit. Praesent ut interdum dui. Vestibulum porttitor, est at commodo euismod, nunc leo facilisis ex, eget pretium justo dui pellentesque dolor. Pellentesque ac maximus mauris. Praesent accumsan convallis ligula tincidunt bibendum. 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">DLC Meat alternatives program</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Know More</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas magna risus, et cursus nibh consectetur vitae. Nulla pretium feugiat volutpat. Nunc semper eleifend tortor. Ut vitae facilisis purus. Proin id ipsum elit. Praesent ut interdum dui. Vestibulum porttitor, est at commodo euismod, nunc leo facilisis ex, eget pretium justo dui pellentesque dolor. Pellentesque ac maximus mauris. Praesent accumsan convallis ligula tincidunt bibendum. 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">DLC Meat alternatives program</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Know More</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas magna risus, et cursus nibh consectetur vitae. Nulla pretium feugiat volutpat. Nunc semper eleifend tortor. Ut vitae facilisis purus. Proin id ipsum elit. Praesent ut interdum dui. Vestibulum porttitor, est at commodo euismod, nunc leo facilisis ex, eget pretium justo dui pellentesque dolor. Pellentesque ac maximus mauris. Praesent accumsan convallis ligula tincidunt bibendum. 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">DLC Meat alternatives program</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Know More</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;