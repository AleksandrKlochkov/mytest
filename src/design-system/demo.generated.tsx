import * as React from 'react';
import { TabBar } from './tab-bar';
import { Toolbar } from './toolbar';
import { BrowserContent } from './browser-content';

export const DemoGenerated: React.FC<{}> = React.memo(props => {
  return (
    <>
      <div className="figma-1">
        <div id="15:2" className="figma-0">
          <div className="figma-5">
            <div id="146:1" className="figma-4 figma-3">
              <TabBar {...props} nodeId="146:1" />
            </div>
          </div>
          <div className="figma-9">
            <div id="146:33" className="figma-8 figma-7">
              <Toolbar {...props} nodeId="146:33" />
            </div>
          </div>
          <div className="figma-12">
            <div id="72:1" className="figma-11">
              <div className="figma-15">
                <div id="14:139" className="figma-14"></div>
              </div>
              <div className="figma-19">
                <div id="146:78" className="figma-18 figma-17">
                  <BrowserContent {...props} nodeId="146:78" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        input {
          font: inherit;
          border: inherit;
          padding: inherit;
          background-color: inherit;
          color: inherit;
        }
        input:focus {
          outline: none;
        }
        .vector {
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          position: absolute;
          overflow: visible !important;
        }
        .figma-0 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 100%;
          height: 100%;
          debug-h: LEFT;
          debug-v: TOP;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
          background-size: auto, auto;
        }
        .figma-1 {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .figma-4 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          debug-h: LEFT_RIGHT;
          width: 845px;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          debug-v: TOP;
          margin-top: 0px;
          margin-bottom: 162px;
          min-height: 40px;
          max-height: 40px;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
          background-size: auto;
        }
        .figma-5 {
          position: relative;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          z-index: 2;
        }
        .figma-8 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          debug-h: LEFT_RIGHT;
          width: 845px;
          margin-left: 0.00006103515625px;
          margin-right: -0.00006103515625px;
          flex-grow: 1;
          debug-v: TOP;
          margin-top: -162px;
          margin-bottom: 126px;
          min-height: 36px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%),
            linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
          background-size: auto, auto;
          border-radius: 9px 9px 9px 9px;
        }
        .figma-9 {
          position: relative;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          z-index: 1;
        }
        .figma-11 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          debug-h: LEFT_RIGHT;
          width: 845px;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          debug-v: TOP_BOTTOM;
          margin-top: 76px;
          margin-bottom: 0px;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
          background-size: auto;
        }
        .figma-12 {
          position: absolute;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          align-items: stretch;
        }
        .figma-14 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          debug-h: LEFT_RIGHT;
          width: 845px;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          debug-v: TOP_BOTTOM;
          margin-top: 0px;
          margin-bottom: 0px;
          background: url(/images/14-139.png) center center no-repeat;
          background-size: cover;
        }
        .figma-15 {
          position: absolute;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          align-items: stretch;
        }
        .figma-18 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          debug-h: LEFT_RIGHT;
          width: 845px;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          debug-v: TOP_BOTTOM;
          margin-top: 0px;
          margin-bottom: 0px;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
          background-size: auto;
        }
        .figma-19 {
          position: absolute;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          align-items: stretch;
          z-index: 1;
        }

        .figma-3 > :global(*) {
          height: 100%;
          width: 100%;
        }

        .figma-7 > :global(*) {
          height: 100%;
          width: 100%;
        }

        .figma-17 > :global(*) {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </>
  );
});
