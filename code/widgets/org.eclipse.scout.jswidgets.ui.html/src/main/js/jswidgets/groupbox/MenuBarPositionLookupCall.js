/*******************************************************************************
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
jswidgets.MenuBarPositionLookupCall = function() {
  jswidgets.MenuBarPositionLookupCall.parent.call(this);
};
scout.inherits(jswidgets.MenuBarPositionLookupCall, scout.StaticLookupCall);

jswidgets.MenuBarPositionLookupCall.prototype._data = function() {
  return jswidgets.MenuBarPositionLookupCall.DATA;
};

jswidgets.MenuBarPositionLookupCall.DATA = [
  [scout.GroupBox.MenuBarPosition.AUTO, 'Auto'],
  [scout.GroupBox.MenuBarPosition.TOP, 'Top'],
  [scout.GroupBox.MenuBarPosition.BOTTOM, 'Bottom']
];
