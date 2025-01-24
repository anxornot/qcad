// Auto generated by Testing Dashboard
// File        : scripts/Draw/Shape/ShapeRectanglePP/Tests/ShapeRectanglePPTest06.js
// Timestamp   : 2025-01-22 14:16:55
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function ShapeRectanglePPTest06() {
    TdbTest.call(this, 'scripts/Draw/Shape/ShapeRectanglePP/Tests/ShapeRectanglePPTest06.js');
}

ShapeRectanglePPTest06.prototype = new TdbTest();

ShapeRectanglePPTest06.prototype.test00 = function() {
    qDebug('running ShapeRectanglePPTest06.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ShapeToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ShapeToolsPanel::ShapeRectanglePPButton');
    this.setToolOption('Shape/CreatePolyline', 'false');
    this.setToolOption('Shape/Fill', 'false');
    this.setToolOption('Shape/RoundCorners', 'true');
    this.setToolOption('Shape/Radius', '5');
    this.setToolOption('ShapeRectanglePP/Rotate', 'false');
    this.setToolOption('ShapeRectanglePP/Rotation', '0');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5,5));
    var p = new RVector(10.1, 9.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(39.9, 29.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(51.5, 40);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('ShapeRectanglePPTest06_000.dxf');
    this.tearDown();
    qDebug('finished ShapeRectanglePPTest06.test00()');
};
