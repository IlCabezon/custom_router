// native
import { string, bool } from "prop-types";

// config
import { EVENTS } from "../const";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // crear evento personalizado
  const navigationState = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationState);
}

export default function Link({ target, href, resetScroll, ...props }) {
  const handleClick = (event) => {
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(href);
      resetScroll && window.scrollTo(0, 0)
    }
  };

  return <a onClick={handleClick} href={href} target={target} {...props} />;
}

Link.propTypes = {
  target: string,
  href: string.isRequired,
  resetScroll: bool
};

Link.defaultProps = {
  target: "_self",
  href: "/",
  resetScroll: true
};
