/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Draw/Line/LineBisector/Tests/LineBisectorTest01.js
// Timestamp   : 2011-02-17 14:40:59
// Description : 10 lines, length 30, 4 times in a square

include('scripts/Developer/TestingDashboard/TdbTest.js');

function LineBisectorTest01() {
    TdbTest.call(this, 'scripts/Draw/Line/LineBisector/Tests/LineBisectorTest01.js');
}

LineBisectorTest01.prototype = new TdbTest();

LineBisectorTest01.prototype.test00 = function() {
    qDebug('running LineBisectorTest01.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::LineToolsPanelButton');
    this.clickOnWidget('MainWindow::ShapeToolsPanel::ShapeRectanglePPButton');
    this.setToolOption('Shape/CreatePolyline', 'false');
    this.setToolOption('Shape/Fill', 'false');
    this.setToolOption('Shape/RoundCorners', 'false');
    this.setToolOption('Shape/Radius', '1');
    this.updateToolOptions();
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(0, 30);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(30, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(198, 221), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(198, 221), Qt.RightButton, 0, 0);
    this.clickOnWidget('MainWindow::MainToolsPanel::LineToolsPanelButton');
    this.clickOnWidget('MainWindow::LineToolsPanel::LineBisectorButton');
    this.setToolOption('LineBisector/Length',  [ 30, 0 ] );
    this.setToolOption('LineBisector/Number', '10');
    this.updateToolOptions();
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(-0.3180000000000088, 13.613999999999999);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(14.65799999999999, -0.0659999999999997);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(25.88999999999999, 29.598);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(29.63399999999999, 22.398);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(16.81799999999999, 0.07800000000000029);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(30.06599999999999, 9.006);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(8.32199999999999, 29.453999999999997);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-19.038000000000007, -20.226, 64.33799999999998, 41.55);
    var p = new RVector(-0.1740000000000088, 15.485999999999999);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(468, 224), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(468, 224), Qt.RightButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(458, 225), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(458, 225), Qt.RightButton, 0, 0);
    this.verifyDrawing('LineBisectorTest01_000.dxf');
    this.tearDown();
    qDebug('finished LineBisectorTest01.test00()');
};

