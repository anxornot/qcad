// Auto generated by Testing Dashboard
// File        : scripts/Modify/AutoTrim/Tests/AutoTrimTest03.js
// Timestamp   : 2015-11-04 21:44:32
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function AutoTrimTest03() {
    TdbTest.call(this, 'scripts/Modify/AutoTrim/Tests/AutoTrimTest03.js');
}

AutoTrimTest03.prototype = new TdbTest();

AutoTrimTest03.prototype.test00 = function() {
    qDebug('running AutoTrimTest03.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/AutoTrim/Tests/data/line_xline_ray.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::AutoTrimButton');
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(22.985969, 24.603954);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(22.716199, 20.107781);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(22.806122, 10.126276);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(22.716199, 7.068878);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(20.468112, 14.442602);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(20.468112, 14.532526);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('AutoTrimTest03_000.dxf');
    this.tearDown();
    qDebug('finished AutoTrimTest03.test00()');
};

