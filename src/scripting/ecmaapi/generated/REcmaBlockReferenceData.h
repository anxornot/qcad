// ***** AUTOGENERATED CODE, DO NOT EDIT *****
            // ***** This class is copyable.
        
        #ifndef RECMABLOCKREFERENCEDATA_H
        #define RECMABLOCKREFERENCEDATA_H

        #include "ecmaapi_global.h"

        #include <QScriptEngine>
        #include <QScriptValue>
        #include <QScriptContextInfo>
        #include <QDebug>

        
                #include "RBlockReferenceData.h"
            

        /**
         * \ingroup scripting_ecmaapi
         */
        class
        
        QCADECMAAPI_EXPORT
        REcmaBlockReferenceData {

        public:
      static  void initEcma(QScriptEngine& engine, QScriptValue* proto 
    =NULL
    ) 
    ;static  QScriptValue createEcma(QScriptContext* context, QScriptEngine* engine) 
    ;

    // conversion functions for base classes:
    static  QScriptValue getREntityData(QScriptContext *context,
            QScriptEngine *engine)
        ;

    // returns class name:
    static  QScriptValue getClassName(QScriptContext *context, QScriptEngine *engine) 
        ;

    // returns all base classes (in case of multiple inheritance):
    static  QScriptValue getBaseClasses(QScriptContext *context, QScriptEngine *engine) 
        ;

    // properties:
    

    // public methods:
    static  QScriptValue
        getRtti
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getType
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        isPointType
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getBoundingBoxes
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getBoundingBox
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        to2D
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getPointOnEntity
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getInternalReferencePoints
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getReferencePoints
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getVectorTo
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getDistanceTo
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getQueryBoxInBlockCoordinates
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getShapes
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        moveReferencePoint
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        move
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        rotate
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        mirror
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        scale
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        scaleVisualProperties
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setReferencedBlockId
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        groundReferencedBlockId
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getReferencedBlockId
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        hasBlockOwnership
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setReferencedBlockName
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getReferencedBlockName
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getScaleFactors
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setScaleFactors
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getRotation
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setRotation
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getColumnCount
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setColumnCount
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getRowCount
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setRowCount
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getColumnSpacing
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setColumnSpacing
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getRowSpacing
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setRowSpacing
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        update
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        queryEntity
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        applyTransformationTo
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTransformed
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTransform
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getColumnRowOffset
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        applyColumnRowOffsetTo
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        mapToBlock
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        isPixelUnit
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue toString
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue copy
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue destroy(QScriptContext *context, QScriptEngine *engine)
    ;static RBlockReferenceData* getSelf(const QString& fName, QScriptContext* context)
    ;static RBlockReferenceData* getSelfShell(const QString& fName, QScriptContext* context)
    ;};
    #endif
    