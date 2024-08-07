// Auto generated by Testing Dashboard
// File        : scripts/Edit/Copy/Tests/CopyTest00.js
// Timestamp   : 2015-04-23 15:25:36
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function CopyTest00() {
    TdbTest.call(this, 'scripts/Edit/Copy/Tests/CopyTest00.js');
}

CopyTest00.prototype = new TdbTest();

CopyTest00.prototype.test00 = function() {
    qDebug('running CopyTest00.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::LineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::LineToolsPanel::Line2PButton');
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(9.8, 30.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(20, 29.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(20.1, 26.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(26.1, 20.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(25.9, 20.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.selectAll();
    this.triggerCommand('copy');
    this.triggerCommand('paste');
    this.setToolOption('Paste/Rotation', '0');
    this.setToolOption('Paste/Scale', '1');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(14.9, 20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(31.1, 22.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('CopyTest00_000.dxf');
    this.tearDown();
    qDebug('finished CopyTest00.test00()');
};

