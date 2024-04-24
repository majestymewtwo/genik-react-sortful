"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_use_gesture_1 = require("react-use-gesture");
const item_1 = require("./item");
exports.DragHandleComponent = (props) => {
    const itemContext = React.useContext(item_1.ItemContext);
    // Checks `props.children` has one React node.
    React.useEffect(() => {
        React.Children.only(props.children);
    }, [props.children]);
    const autoScroll = (clientX, clientY) => {
        const scrollContainer = props.scrollContainerRef.current;
        if (!scrollContainer) return;
    
        const nearEdgeVertical = 50;
        const nearEdgeHorizontal = 50;
        const scrollStepVertical = 20;
        const scrollStepHorizontal = 20;
    
        const { top, bottom, left, right } = scrollContainer.getBoundingClientRect();
    
        // Scroll vertically
        if (clientY - top < nearEdgeVertical && scrollContainer.scrollTop > 0) {
            scrollContainer.scrollBy(0, -scrollStepVertical);
        } else if (bottom - clientY < nearEdgeVertical && scrollContainer.scrollTop + scrollContainer.clientHeight < scrollContainer.scrollHeight) {
            scrollContainer.scrollBy(0, scrollStepVertical);
        }
    
        // Scroll horizontally
        if (clientX - left < nearEdgeHorizontal && scrollContainer.scrollLeft > 0) {
            scrollContainer.scrollBy(-scrollStepHorizontal, 0);
        } else if (right - clientX < nearEdgeHorizontal && scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
            scrollContainer.scrollBy(scrollStepHorizontal, 0);
        }
    };
    const draggableBinder = react_use_gesture_1.useGesture({
        onDragStart: (state) => {
            if (itemContext.isLocked)
                return;
            const event = state.event;
            event.persist();
            event.stopPropagation();
            itemContext.dragHandlers.onDragStart();
            
        },
        onDrag: ({ down, movement, xy }) => {
            const [clientX, clientY] = xy;
            if (itemContext.isLocked)
                return;
            itemContext.dragHandlers.onDrag(down, movement);
            autoScroll(clientX, clientY); // Now passes both clientX and clientY
        },
        onDragEnd: () => {
            if (itemContext.isLocked)
                return;
            itemContext.dragHandlers.onDragEnd();
        },
    });
    return (React.createElement("div", Object.assign({ className: props.className  }, draggableBinder()), props.children));
};
