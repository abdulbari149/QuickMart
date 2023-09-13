import { horizontalScale, verticalScale } from 'utils/styles';

const Spacing = {
  horizontal: {
    globalHorizontalPadding: 16,
    size4: horizontalScale(4),
    size8: horizontalScale(8),
    size12: horizontalScale(12),
    size16: horizontalScale(16),
    size20: horizontalScale(20),
    size24: horizontalScale(24),
    size28: horizontalScale(28),
    size32: horizontalScale(32),
    size40: horizontalScale(40),
    size48: horizontalScale(48),
    size56: horizontalScale(56),
  },
  vertical: {
    size4: verticalScale(4),
    size8: verticalScale(8),
    size12: verticalScale(12),
    size16: verticalScale(16),
    size20: verticalScale(20),
    size24: verticalScale(24),
    size28: verticalScale(28),
    size32: verticalScale(32),
    size36: verticalScale(36),
    size40: verticalScale(40),
    size56: verticalScale(56),
    size64: verticalScale(64),
    size72: verticalScale(72),
    size88: verticalScale(88),
  },
} as const;

export default Spacing;
