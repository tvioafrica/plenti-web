"use strict";
exports.id = 7319;
exports.ids = [7319];
exports.modules = {

/***/ 27319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VY: () => (/* binding */ $a093c7e1ec25a057$export$7c6e2c02157bb7d2),
  zt: () => (/* binding */ $a093c7e1ec25a057$export$2881499e37b75b9a),
  fC: () => (/* binding */ $a093c7e1ec25a057$export$be92b6f5f03c0fe9),
  xz: () => (/* binding */ $a093c7e1ec25a057$export$41fb9f06171c75f4)
});

// UNUSED EXPORTS: Arrow, Portal, Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger, createTooltipScope

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35108);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(32840);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(80880);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(8718);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs + 1 modules
var react_dismissable_layer_dist = __webpack_require__(75393);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(76529);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-popper/dist/index.mjs + 3 modules
var react_popper_dist = __webpack_require__(87453);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(53151);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(79752);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(43979);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(71085);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(43408);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs







/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden
 * -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$var$NAME = 'VisuallyHidden';
const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($ea1ef594cf570d83$export$439d29a4e110a164, {
    displayName: $ea1ef594cf570d83$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-tooltip/dist/index.mjs






























const [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = (0,react_context_dist/* createContextScope */.b)('Tooltip', [
    react_popper_dist/* createPopperScope */.D7
]);
const $a093c7e1ec25a057$var$usePopperScope = (0,react_popper_dist/* createPopperScope */.D7)();
/* -------------------------------------------------------------------------------------------------
 * TooltipProvider
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$PROVIDER_NAME = 'TooltipProvider';
const $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
const $a093c7e1ec25a057$var$TOOLTIP_OPEN = 'tooltip.open';
const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
const $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props)=>{
    const { __scopeTooltip: __scopeTooltip , delayDuration: delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION , skipDelayDuration: skipDelayDuration = 300 , disableHoverableContent: disableHoverableContent = false , children: children  } = props;
    const [isOpenDelayed, setIsOpenDelayed] = (0,react_.useState)(true);
    const isPointerInTransitRef = (0,react_.useRef)(false);
    const skipDelayTimerRef = (0,react_.useRef)(0);
    (0,react_.useEffect)(()=>{
        const skipDelayTimer = skipDelayTimerRef.current;
        return ()=>window.clearTimeout(skipDelayTimer)
        ;
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
        scope: __scopeTooltip,
        isOpenDelayed: isOpenDelayed,
        delayDuration: delayDuration,
        onOpen: (0,react_.useCallback)(()=>{
            window.clearTimeout(skipDelayTimerRef.current);
            setIsOpenDelayed(false);
        }, []),
        onClose: (0,react_.useCallback)(()=>{
            window.clearTimeout(skipDelayTimerRef.current);
            skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true)
            , skipDelayDuration);
        }, [
            skipDelayDuration
        ]),
        isPointerInTransitRef: isPointerInTransitRef,
        onPointerInTransitChange: (0,react_.useCallback)((inTransit)=>{
            isPointerInTransitRef.current = inTransit;
        }, []),
        disableHoverableContent: disableHoverableContent
    }, children);
};
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$f78649fb9ca566b8, {
    displayName: $a093c7e1ec25a057$var$PROVIDER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Tooltip
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$TOOLTIP_NAME = 'Tooltip';
const [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
const $a093c7e1ec25a057$export$28c660c63b792dea = (props)=>{
    const { __scopeTooltip: __scopeTooltip , children: children , open: openProp , defaultOpen: defaultOpen = false , onOpenChange: onOpenChange , disableHoverableContent: disableHoverableContentProp , delayDuration: delayDurationProp  } = props;
    const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
    const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
    const [trigger, setTrigger] = (0,react_.useState)(null);
    const contentId = (0,react_id_dist/* useId */.M)();
    const openTimerRef = (0,react_.useRef)(0);
    const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
    const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
    const wasOpenDelayedRef = (0,react_.useRef)(false);
    const [open1 = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: (open)=>{
            if (open) {
                providerContext.onOpen(); // as `onChange` is called within a lifecycle method we
                // avoid dispatching via `dispatchDiscreteCustomEvent`.
                document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
            } else providerContext.onClose();
            onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
        }
    });
    const stateAttribute = (0,react_.useMemo)(()=>{
        return open1 ? wasOpenDelayedRef.current ? 'delayed-open' : 'instant-open' : 'closed';
    }, [
        open1
    ]);
    const handleOpen = (0,react_.useCallback)(()=>{
        window.clearTimeout(openTimerRef.current);
        wasOpenDelayedRef.current = false;
        setOpen(true);
    }, [
        setOpen
    ]);
    const handleClose = (0,react_.useCallback)(()=>{
        window.clearTimeout(openTimerRef.current);
        setOpen(false);
    }, [
        setOpen
    ]);
    const handleDelayedOpen = (0,react_.useCallback)(()=>{
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = window.setTimeout(()=>{
            wasOpenDelayedRef.current = true;
            setOpen(true);
        }, delayDuration);
    }, [
        delayDuration,
        setOpen
    ]);
    (0,react_.useEffect)(()=>{
        return ()=>window.clearTimeout(openTimerRef.current)
        ;
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Root */.fC, popperScope, /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$TooltipContextProvider, {
        scope: __scopeTooltip,
        contentId: contentId,
        open: open1,
        stateAttribute: stateAttribute,
        trigger: trigger,
        onTriggerChange: setTrigger,
        onTriggerEnter: (0,react_.useCallback)(()=>{
            if (providerContext.isOpenDelayed) handleDelayedOpen();
            else handleOpen();
        }, [
            providerContext.isOpenDelayed,
            handleDelayedOpen,
            handleOpen
        ]),
        onTriggerLeave: (0,react_.useCallback)(()=>{
            if (disableHoverableContent) handleClose();
            else // Clear the timer in case the pointer leaves the trigger before the tooltip is opened.
            window.clearTimeout(openTimerRef.current);
        }, [
            handleClose,
            disableHoverableContent
        ]),
        onOpen: handleOpen,
        onClose: handleClose,
        disableHoverableContent: disableHoverableContent
    }, children));
};
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$28c660c63b792dea, {
    displayName: $a093c7e1ec25a057$var$TOOLTIP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$TRIGGER_NAME = 'TooltipTrigger';
const $a093c7e1ec25a057$export$8c610744efcf8a1d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeTooltip: __scopeTooltip , ...triggerProps } = props;
    const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
    const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
    const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = (0,react_.useRef)(false);
    const hasPointerMoveOpenedRef = (0,react_.useRef)(false);
    const handlePointerUp = (0,react_.useCallback)(()=>isPointerDownRef.current = false
    , []);
    (0,react_.useEffect)(()=>{
        return ()=>document.removeEventListener('pointerup', handlePointerUp)
        ;
    }, [
        handlePointerUp
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Anchor */.ee, (0,esm_extends/* default */.Z)({
        asChild: true
    }, popperScope), /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        // We purposefully avoid adding `type=button` here because tooltip triggers are also
        // commonly anchors and the anchor `type` attribute signifies MIME type.
        "aria-describedby": context.open ? context.contentId : undefined,
        "data-state": context.stateAttribute
    }, triggerProps, {
        ref: composedRefs,
        onPointerMove: (0,dist/* composeEventHandlers */.M)(props.onPointerMove, (event)=>{
            if (event.pointerType === 'touch') return;
            if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
                context.onTriggerEnter();
                hasPointerMoveOpenedRef.current = true;
            }
        }),
        onPointerLeave: (0,dist/* composeEventHandlers */.M)(props.onPointerLeave, ()=>{
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: (0,dist/* composeEventHandlers */.M)(props.onPointerDown, ()=>{
            isPointerDownRef.current = true;
            document.addEventListener('pointerup', handlePointerUp, {
                once: true
            });
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>{
            if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: (0,dist/* composeEventHandlers */.M)(props.onBlur, context.onClose),
        onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, context.onClose)
    })));
});
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$8c610744efcf8a1d, {
    displayName: $a093c7e1ec25a057$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * TooltipPortal
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$PORTAL_NAME = 'TooltipPortal';
const [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
    forceMount: undefined
});
const $a093c7e1ec25a057$export$7b36b8f925ab7497 = (props)=>{
    const { __scopeTooltip: __scopeTooltip , forceMount: forceMount , children: children , container: container  } = props;
    const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, __scopeTooltip);
    return /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$PortalProvider, {
        scope: __scopeTooltip,
        forceMount: forceMount
    }, /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react_.createElement)(react_portal_dist/* Portal */.h, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$7b36b8f925ab7497, {
    displayName: $a093c7e1ec25a057$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$CONTENT_NAME = 'TooltipContent';
const $a093c7e1ec25a057$export$e9003e2be37ec060 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
    const { forceMount: forceMount = portalContext.forceMount , side: side = 'top' , ...contentProps } = props;
    const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
    return /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, context.disableHoverableContent ? /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, (0,esm_extends/* default */.Z)({
        side: side
    }, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$TooltipContentHoverable, (0,esm_extends/* default */.Z)({
        side: side
    }, contentProps, {
        ref: forwardedRef
    })));
});
const $a093c7e1ec25a057$var$TooltipContentHoverable = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
    const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const [pointerGraceArea, setPointerGraceArea] = (0,react_.useState)(null);
    const { trigger: trigger , onClose: onClose  } = context;
    const content = ref.current;
    const { onPointerInTransitChange: onPointerInTransitChange  } = providerContext;
    const handleRemoveGraceArea = (0,react_.useCallback)(()=>{
        setPointerGraceArea(null);
        onPointerInTransitChange(false);
    }, [
        onPointerInTransitChange
    ]);
    const handleCreateGraceArea = (0,react_.useCallback)((event, hoverTarget)=>{
        const currentTarget = event.currentTarget;
        const exitPoint = {
            x: event.clientX,
            y: event.clientY
        };
        const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
        const paddedExitPoints = $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide);
        const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
        const graceArea = $a093c7e1ec25a057$var$getHull([
            ...paddedExitPoints,
            ...hoverTargetPoints
        ]);
        setPointerGraceArea(graceArea);
        onPointerInTransitChange(true);
    }, [
        onPointerInTransitChange
    ]);
    (0,react_.useEffect)(()=>{
        return ()=>handleRemoveGraceArea()
        ;
    }, [
        handleRemoveGraceArea
    ]);
    (0,react_.useEffect)(()=>{
        if (trigger && content) {
            const handleTriggerLeave = (event)=>handleCreateGraceArea(event, content)
            ;
            const handleContentLeave = (event)=>handleCreateGraceArea(event, trigger)
            ;
            trigger.addEventListener('pointerleave', handleTriggerLeave);
            content.addEventListener('pointerleave', handleContentLeave);
            return ()=>{
                trigger.removeEventListener('pointerleave', handleTriggerLeave);
                content.removeEventListener('pointerleave', handleContentLeave);
            };
        }
    }, [
        trigger,
        content,
        handleCreateGraceArea,
        handleRemoveGraceArea
    ]);
    (0,react_.useEffect)(()=>{
        if (pointerGraceArea) {
            const handleTrackPointerGrace = (event)=>{
                const target = event.target;
                const pointerPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
                const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
                if (hasEnteredTarget) handleRemoveGraceArea();
                else if (isPointerOutsideGraceArea) {
                    handleRemoveGraceArea();
                    onClose();
                }
            };
            document.addEventListener('pointermove', handleTrackPointerGrace);
            return ()=>document.removeEventListener('pointermove', handleTrackPointerGrace)
            ;
        }
    }, [
        trigger,
        content,
        pointerGraceArea,
        onClose,
        handleRemoveGraceArea
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs
    }));
});
const [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
    isInside: false
});
const $a093c7e1ec25a057$var$TooltipContentImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeTooltip: __scopeTooltip , children: children , 'aria-label': ariaLabel , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , ...contentProps } = props;
    const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
    const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
    const { onClose: onClose  } = context; // Close this tooltip if another one opens
    (0,react_.useEffect)(()=>{
        document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
        return ()=>document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose)
        ;
    }, [
        onClose
    ]); // Close the tooltip if the trigger is scrolled
    (0,react_.useEffect)(()=>{
        if (context.trigger) {
            const handleScroll = (event)=>{
                const target = event.target;
                if (target !== null && target !== void 0 && target.contains(context.trigger)) onClose();
            };
            window.addEventListener('scroll', handleScroll, {
                capture: true
            });
            return ()=>window.removeEventListener('scroll', handleScroll, {
                    capture: true
                })
            ;
        }
    }, [
        context.trigger,
        onClose
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_dismissable_layer_dist/* DismissableLayer */.XB, {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: (event)=>event.preventDefault()
        ,
        onDismiss: onClose
    }, /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Content */.VY, (0,esm_extends/* default */.Z)({
        "data-state": context.stateAttribute
    }, popperScope, contentProps, {
        ref: forwardedRef,
        style: {
            ...contentProps.style,
            '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }), /*#__PURE__*/ (0,react_.createElement)(react_slot_dist/* Slottable */.A4, null, children), /*#__PURE__*/ (0,react_.createElement)($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
        scope: __scopeTooltip,
        isInside: true
    }, /*#__PURE__*/ (0,react_.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
        id: context.contentId,
        role: "tooltip"
    }, ariaLabel || children))));
});
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$e9003e2be37ec060, {
    displayName: $a093c7e1ec25a057$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * TooltipArrow
 * -----------------------------------------------------------------------------------------------*/ const $a093c7e1ec25a057$var$ARROW_NAME = 'TooltipArrow';
const $a093c7e1ec25a057$export$c27ee0ad710f7559 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeTooltip: __scopeTooltip , ...arrowProps } = props;
    const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = $a093c7e1ec25a057$var$useVisuallyHiddenContentContext($a093c7e1ec25a057$var$ARROW_NAME, __scopeTooltip); // if the arrow is inside the `VisuallyHidden`, we don't want to render it all to
    // prevent issues in positioning the arrow due to the duplicate
    return visuallyHiddenContentContext.isInside ? null : /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Arrow */.Eh, (0,esm_extends/* default */.Z)({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($a093c7e1ec25a057$export$c27ee0ad710f7559, {
    displayName: $a093c7e1ec25a057$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
    const top = Math.abs(rect.top - point.y);
    const bottom = Math.abs(rect.bottom - point.y);
    const right = Math.abs(rect.right - point.x);
    const left = Math.abs(rect.left - point.x);
    switch(Math.min(top, bottom, right, left)){
        case left:
            return 'left';
        case right:
            return 'right';
        case top:
            return 'top';
        case bottom:
            return 'bottom';
        default:
            throw new Error('unreachable');
    }
}
function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
    const paddedExitPoints = [];
    switch(exitSide){
        case 'top':
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case 'bottom':
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            });
            break;
        case 'left':
            paddedExitPoints.push({
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case 'right':
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            });
            break;
    }
    return paddedExitPoints;
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
    const { top: top , right: right , bottom: bottom , left: left  } = rect;
    return [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
} // Determine if a point is inside of a polygon.
// Based on https://github.com/substack/point-in-polygon
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
    const { x: x , y: y  } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y; // prettier-ignore
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
} // Returns a new array of points representing the convex hull of the given set of points.
// https://www.nayuki.io/page/convex-hull-algorithm
function $a093c7e1ec25a057$var$getHull(points) {
    const newPoints = points.slice();
    newPoints.sort((a, b)=>{
        if (a.x < b.x) return -1;
        else if (a.x > b.x) return 1;
        else if (a.y < b.y) return -1;
        else if (a.y > b.y) return 1;
        else return 0;
    });
    return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
} // Returns the convex hull, assuming that each points[i] <= points[i + 1]. Runs in O(n) time.
function $a093c7e1ec25a057$var$getHullPresorted(points) {
    if (points.length <= 1) return points.slice();
    const upperHull = [];
    for(let i = 0; i < points.length; i++){
        const p = points[i];
        while(upperHull.length >= 2){
            const q = upperHull[upperHull.length - 1];
            const r = upperHull[upperHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
            else break;
        }
        upperHull.push(p);
    }
    upperHull.pop();
    const lowerHull = [];
    for(let i1 = points.length - 1; i1 >= 0; i1--){
        const p = points[i1];
        while(lowerHull.length >= 2){
            const q = lowerHull[lowerHull.length - 1];
            const r = lowerHull[lowerHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
            else break;
        }
        lowerHull.push(p);
    }
    lowerHull.pop();
    if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
    else return upperHull.concat(lowerHull);
}
const $a093c7e1ec25a057$export$2881499e37b75b9a = $a093c7e1ec25a057$export$f78649fb9ca566b8;
const $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
const $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
const $a093c7e1ec25a057$export$602eac185826482c = (/* unused pure expression or super */ null && ($a093c7e1ec25a057$export$7b36b8f925ab7497));
const $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
const $a093c7e1ec25a057$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($a093c7e1ec25a057$export$c27ee0ad710f7559));





//# sourceMappingURL=index.mjs.map


/***/ })

};
;