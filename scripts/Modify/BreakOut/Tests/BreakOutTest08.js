// Auto generated by Testing Dashboard
// File        : scripts/Modify/BreakOut/Tests/BreakOutTest08.js
// Timestamp   : 2015-11-09 16:08:11
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function BreakOutTest08() {
    TdbTest.call(this, 'scripts/Modify/BreakOut/Tests/BreakOutTest08.js');
}

BreakOutTest08.prototype = new TdbTest();

BreakOutTest08.prototype.test00 = function() {
    qDebug('running BreakOutTest08.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/BreakOut/Tests/data/splines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::BreakOutProButton');
    this.setToolOption('BreakOutPro/RemoveSegment', 'true');
    this.setToolOption('BreakOutPro/LineMode', 'false');
    this.updateToolOptions();
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(17.634919, 46.407526);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(17.250353, 42.690051);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(17.122164, 37.049745);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(15.968465, 28.717474);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(15.45571, 19.872449);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(17.50673, 10.130102);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(40.324332, 23.718112);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(39.5552, 23.333546);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('BreakOutTest08_000.dxf');
    this.tearDown();
    qDebug('finished BreakOutTest08.test00()');
};

