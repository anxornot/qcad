/**
 * Copyright (c) 2011-2018 by Andrew Mustun. All rights reserved.
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

#ifndef RDIMANGULARENTITY_H
#define RDIMANGULARENTITY_H

#include "entity_global.h"

#include "RDimensionEntity.h"
#include "RDimAngularData.h"

class RArc;
class RDocument;
class RExporter;

/**
 * Angular dimension entity base class.
 *
 * \scriptable
 * \sharedPointerSupport
 * \ingroup entity
 */
class QCADENTITY_EXPORT RDimAngularEntity: public RDimensionEntity {

    Q_DECLARE_TR_FUNCTIONS(RDimAngularEntity)

public:
    static RPropertyTypeId PropertyCustom;
    static RPropertyTypeId PropertyHandle;
    static RPropertyTypeId PropertyProtected;
    static RPropertyTypeId PropertyWorkingSet;
    static RPropertyTypeId PropertyType;
    static RPropertyTypeId PropertyBlock;
    static RPropertyTypeId PropertyLayer;
    static RPropertyTypeId PropertyLinetype;
    static RPropertyTypeId PropertyLinetypeScale;
    static RPropertyTypeId PropertyLineweight;
    static RPropertyTypeId PropertyColor;
    static RPropertyTypeId PropertyDisplayedColor;
    static RPropertyTypeId PropertyDrawOrder;

    static RPropertyTypeId PropertyMiddleOfTextX;
    static RPropertyTypeId PropertyMiddleOfTextY;
    static RPropertyTypeId PropertyMiddleOfTextZ;
    static RPropertyTypeId PropertyText;
    static RPropertyTypeId PropertyUpperTolerance;
    static RPropertyTypeId PropertyLowerTolerance;
    static RPropertyTypeId PropertyMeasuredValue;

    static RPropertyTypeId PropertyDimscale;
    //static RPropertyTypeId PropertyDimlfac;
    static RPropertyTypeId PropertyDimtxt;
    static RPropertyTypeId PropertyDimgap;
    static RPropertyTypeId PropertyDimasz;
    //static RPropertyTypeId PropertyDimdli;
    static RPropertyTypeId PropertyDimexe;
    static RPropertyTypeId PropertyDimexo;
    static RPropertyTypeId PropertyDimtad;
    static RPropertyTypeId PropertyDimtih;
    static RPropertyTypeId PropertyDimtsz;
    //static RPropertyTypeId PropertyDimlunit;
    //static RPropertyTypeId PropertyDimdec;
    static RPropertyTypeId PropertyDimdsep;
    //static RPropertyTypeId PropertyDimzin;
    static RPropertyTypeId PropertyDimaunit;
    static RPropertyTypeId PropertyDimadec;
    static RPropertyTypeId PropertyDimazin;
    static RPropertyTypeId PropertyArchTick;
    static RPropertyTypeId PropertyDimclrt;

    //static RPropertyTypeId PropertyDimScale;
    static RPropertyTypeId PropertyDimBlockName;
    static RPropertyTypeId PropertyAutoTextPos;
    static RPropertyTypeId PropertyFontName;
    static RPropertyTypeId PropertyArrow1Flipped;
    static RPropertyTypeId PropertyArrow2Flipped;

    static RPropertyTypeId PropertyExtLineFix;
    static RPropertyTypeId PropertyExtLineFixLength;

    static RPropertyTypeId PropertyCenterX;
    static RPropertyTypeId PropertyCenterY;
    static RPropertyTypeId PropertyCenterZ;

    static RPropertyTypeId PropertyExtensionLine1EndX;
    static RPropertyTypeId PropertyExtensionLine1EndY;
    static RPropertyTypeId PropertyExtensionLine1EndZ;

    static RPropertyTypeId PropertyExtensionLine2EndX;
    static RPropertyTypeId PropertyExtensionLine2EndY;
    static RPropertyTypeId PropertyExtensionLine2EndZ;

    static RPropertyTypeId PropertyDimArcPositionX;
    static RPropertyTypeId PropertyDimArcPositionY;
    static RPropertyTypeId PropertyDimArcPositionZ;

public:
    RDimAngularEntity(RDocument* document);
    virtual ~RDimAngularEntity();

    static void init();

    virtual RDimAngularData& getData() = 0;
    virtual const RDimAngularData& getData() const = 0;

    void setExtensionLine1End(const RVector& p) {
        getData().setExtensionLine1End(p);
    }

    RVector getExtensionLine1End() const {
        return getData().getExtensionLine1End();
    }

    void setExtensionLine2End(const RVector& p) {
        getData().setExtensionLine2End(p);
    }

    RVector getExtensionLine2End() const {
        return getData().getExtensionLine2End();
    }

    void setDimArcPosition(const RVector& p) {
        getData().setDimArcPosition(p);
    }

    RVector getDimArcPosition() const {
        return getData().getDimArcPosition();
    }

    virtual RArc getDimensionArc() const;

protected:
    virtual void print(QDebug dbg) const;

//protected:
    //RDimAngularData data;
};

Q_DECLARE_METATYPE(RDimAngularEntity*)
Q_DECLARE_METATYPE(QSharedPointer<RDimAngularEntity>)
Q_DECLARE_METATYPE(QSharedPointer<RDimAngularEntity>*)

#endif
