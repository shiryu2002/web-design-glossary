import type { Term } from '../types';

// 認知心理学（Z/F は layout/ の既存ファイルを流用）
import { GutenbergDemo } from '../components/demos/cognitive/GutenbergDemo';
import { GestaltProximityDemo } from '../components/demos/cognitive/GestaltProximityDemo';
import { GestaltSimilarityDemo } from '../components/demos/cognitive/GestaltSimilarityDemo';
import { GestaltClosureDemo } from '../components/demos/cognitive/GestaltClosureDemo';
import { GestaltContinuityDemo } from '../components/demos/cognitive/GestaltContinuityDemo';
import { GestaltFigureGroundDemo } from '../components/demos/cognitive/GestaltFigureGroundDemo';
import { FittsLawDemo } from '../components/demos/cognitive/FittsLawDemo';
import { HicksLawDemo } from '../components/demos/cognitive/HicksLawDemo';
import { MillersLawDemo } from '../components/demos/cognitive/MillersLawDemo';
import { PrimacyRecencyDemo } from '../components/demos/cognitive/PrimacyRecencyDemo';
import { JakobsLawDemo } from '../components/demos/cognitive/JakobsLawDemo';
import { AestheticUsabilityDemo } from '../components/demos/cognitive/AestheticUsabilityDemo';
import { DohertyThresholdDemo } from '../components/demos/cognitive/DohertyThresholdDemo';
import { PeakEndRuleDemo } from '../components/demos/cognitive/PeakEndRuleDemo';
import { VonRestorffDemo } from '../components/demos/cognitive/VonRestorffDemo';
import { BannerBlindnessDemo } from '../components/demos/cognitive/BannerBlindnessDemo';
import { GestaltCommonFateDemo } from '../components/demos/cognitive/GestaltCommonFateDemo';
import { GestaltSymmetryDemo } from '../components/demos/cognitive/GestaltSymmetryDemo';
import { GestaltPragnanzDemo } from '../components/demos/cognitive/GestaltPragnanzDemo';
import { GestaltCommonRegionDemo } from '../components/demos/cognitive/GestaltCommonRegionDemo';
import { GestaltUniformConnectednessDemo } from '../components/demos/cognitive/GestaltUniformConnectednessDemo';
import { TeslersLawDemo } from '../components/demos/cognitive/TeslersLawDemo';
import { PostelsLawDemo } from '../components/demos/cognitive/PostelsLawDemo';
import { GoalGradientDemo } from '../components/demos/cognitive/GoalGradientDemo';
import { ZeigarnikDemo } from '../components/demos/cognitive/ZeigarnikDemo';
import { SerialPositionDemo } from '../components/demos/cognitive/SerialPositionDemo';
import { ParetoDemo } from '../components/demos/cognitive/ParetoDemo';
import { ChunkingDemo } from '../components/demos/cognitive/ChunkingDemo';
import { CognitiveLoadDemo } from '../components/demos/cognitive/CognitiveLoadDemo';
import { InattentionalBlindnessDemo } from '../components/demos/cognitive/InattentionalBlindnessDemo';
import { ChangeBlindnessDemo } from '../components/demos/cognitive/ChangeBlindnessDemo';
import { ChoiceOverloadDemo } from '../components/demos/cognitive/ChoiceOverloadDemo';
import { DecoyEffectDemo } from '../components/demos/cognitive/DecoyEffectDemo';
import { AnchoringDemo } from '../components/demos/cognitive/AnchoringDemo';
import { FramingDemo } from '../components/demos/cognitive/FramingDemo';
import { LossAversionDemo } from '../components/demos/cognitive/LossAversionDemo';
import { EndowmentDemo } from '../components/demos/cognitive/EndowmentDemo';
import { SunkCostDemo } from '../components/demos/cognitive/SunkCostDemo';
import { IkeaEffectDemo } from '../components/demos/cognitive/IkeaEffectDemo';
import { ConfirmationBiasDemo } from '../components/demos/cognitive/ConfirmationBiasDemo';
import { BandwagonDemo } from '../components/demos/cognitive/BandwagonDemo';
import { SocialProofDemo } from '../components/demos/cognitive/SocialProofDemo';
import { AuthorityBiasDemo } from '../components/demos/cognitive/AuthorityBiasDemo';
import { ScarcityDemo } from '../components/demos/cognitive/ScarcityDemo';
import { ReciprocityDemo } from '../components/demos/cognitive/ReciprocityDemo';
import { CommitmentConsistencyDemo } from '../components/demos/cognitive/CommitmentConsistencyDemo';
import { CuriosityGapDemo } from '../components/demos/cognitive/CuriosityGapDemo';
import { PictureSuperiorityDemo } from '../components/demos/cognitive/PictureSuperiorityDemo';
import { AffordanceDemo } from '../components/demos/cognitive/AffordanceDemo';
import { SignifierDemo } from '../components/demos/cognitive/SignifierDemo';
import { MappingDemo } from '../components/demos/cognitive/MappingDemo';
import { RecognitionRecallDemo } from '../components/demos/cognitive/RecognitionRecallDemo';
import { MereExposureDemo } from '../components/demos/cognitive/MereExposureDemo';
import { CenterStageDemo } from '../components/demos/cognitive/CenterStageDemo';
import { LocalityDemo } from '../components/demos/cognitive/LocalityDemo';
import { SelectiveAttentionDemo } from '../components/demos/cognitive/SelectiveAttentionDemo';

// アニメーション
import { ParallaxDemo } from '../components/demos/animation/ParallaxDemo';
import { FadeInDemo } from '../components/demos/animation/FadeInDemo';
import { HoverLiftDemo } from '../components/demos/animation/HoverLiftDemo';
import { RippleDemo } from '../components/demos/animation/RippleDemo';
import { MarqueeDemo } from '../components/demos/animation/MarqueeDemo';
import { SkeletonDemo } from '../components/demos/animation/SkeletonDemo';
import { ScrollRevealDemo } from '../components/demos/animation/ScrollRevealDemo';
import { PulseDemo } from '../components/demos/animation/PulseDemo';
import { SpinDemo } from '../components/demos/animation/SpinDemo';
import { TypewriterDemo } from '../components/demos/animation/TypewriterDemo';
import { BounceDemo } from '../components/demos/animation/BounceDemo';
import { ShakeDemo } from '../components/demos/animation/ShakeDemo';
import { GlitchDemo } from '../components/demos/animation/GlitchDemo';
import { RevealMaskDemo } from '../components/demos/animation/RevealMaskDemo';
import { WiggleDemo } from '../components/demos/animation/WiggleDemo';
import { MorphDemo } from '../components/demos/animation/MorphDemo';
import { StaggerDemo } from '../components/demos/animation/StaggerDemo';
import { ZoomDemo } from '../components/demos/animation/ZoomDemo';
import { SlideInDemo } from '../components/demos/animation/SlideInDemo';
import { FlipCardDemo } from '../components/demos/animation/FlipCardDemo';
import { MagneticDemo } from '../components/demos/animation/MagneticDemo';
import { CursorFollowDemo } from '../components/demos/animation/CursorFollowDemo';
import { CounterUpDemo } from '../components/demos/animation/CounterUpDemo';
import { ConfettiDemo } from '../components/demos/animation/ConfettiDemo';
import { PageTransitionDemo } from '../components/demos/animation/PageTransitionDemo';
import { LiquidBlobDemo } from '../components/demos/animation/LiquidBlobDemo';
import { PathAnimationDemo } from '../components/demos/animation/PathAnimationDemo';
import { TiltDemo } from '../components/demos/animation/TiltDemo';
import { HoverGlowDemo } from '../components/demos/animation/HoverGlowDemo';
import { TextRevealDemo } from '../components/demos/animation/TextRevealDemo';
import { SkewDemo } from '../components/demos/animation/SkewDemo';
import { HeartbeatDemo } from '../components/demos/animation/HeartbeatDemo';
import { JellyDemo } from '../components/demos/animation/JellyDemo';
import { ParticleDemo } from '../components/demos/animation/ParticleDemo';
import { FloatingDemo } from '../components/demos/animation/FloatingDemo';
import { WaveTextDemo } from '../components/demos/animation/WaveTextDemo';
import { ColorCycleDemo } from '../components/demos/animation/ColorCycleDemo';
import { IrisDemo } from '../components/demos/animation/IrisDemo';
import { GlowPulseDemo } from '../components/demos/animation/GlowPulseDemo';
import { EasingCurveDemo } from '../components/demos/animation/EasingCurveDemo';
import { SmoothScrollDemo } from '../components/demos/animation/SmoothScrollDemo';
import { CascadeDemo } from '../components/demos/animation/CascadeDemo';
import { SpotlightDemo } from '../components/demos/animation/SpotlightDemo';
import { HoverRevealDemo } from '../components/demos/animation/HoverRevealDemo';
import { AnticipationDemo } from '../components/demos/animation/AnticipationDemo';
import { SquashStretchDemo } from '../components/demos/animation/SquashStretchDemo';
import { FollowThroughDemo } from '../components/demos/animation/FollowThroughDemo';
import { OvershootDemo } from '../components/demos/animation/OvershootDemo';
import { SpringDemo } from '../components/demos/animation/SpringDemo';
import { InertiaDemo } from '../components/demos/animation/InertiaDemo';
import { RubberBandDemo } from '../components/demos/animation/RubberBandDemo';
import { SnapDemo } from '../components/demos/animation/SnapDemo';
import { ScrubDemo } from '../components/demos/animation/ScrubDemo';
import { PinStickyHoldDemo } from '../components/demos/animation/PinStickyHoldDemo';
import { HorizontalScrollHijackDemo } from '../components/demos/animation/HorizontalScrollHijackDemo';
import { StickyStackDemo } from '../components/demos/animation/StickyStackDemo';
import { ShimmerDemo } from '../components/demos/animation/ShimmerDemo';
import { ProgressRingDemo } from '../components/demos/animation/ProgressRingDemo';
import { NumberRollDemo } from '../components/demos/animation/NumberRollDemo';
import { TextScrambleDemo } from '../components/demos/animation/TextScrambleDemo';
import { SplitTextDemo } from '../components/demos/animation/SplitTextDemo';
import { VariableFontMorphDemo } from '../components/demos/animation/VariableFontMorphDemo';
import { UnderlineSweepDemo } from '../components/demos/animation/UnderlineSweepDemo';
import { WordCycleDemo } from '../components/demos/animation/WordCycleDemo';
import { GradientFlowDemo } from '../components/demos/animation/GradientFlowDemo';
import { AuroraDemo } from '../components/demos/animation/AuroraDemo';
import { GrainNoiseDemo } from '../components/demos/animation/GrainNoiseDemo';
import { CausticsDemo } from '../components/demos/animation/CausticsDemo';
import { ConicSweepDemo } from '../components/demos/animation/ConicSweepDemo';
import { HalftoneDitherDemo } from '../components/demos/animation/HalftoneDitherDemo';
import { InkBleedDemo } from '../components/demos/animation/InkBleedDemo';
import { CrossDissolveDemo } from '../components/demos/animation/CrossDissolveDemo';
import { PushSlideDemo } from '../components/demos/animation/PushSlideDemo';
import { RotateInDemo } from '../components/demos/animation/RotateInDemo';
import { LongPressHoldDemo } from '../components/demos/animation/LongPressHoldDemo';
import { SwipeToRevealDemo } from '../components/demos/animation/SwipeToRevealDemo';
import { PinchZoomDemo } from '../components/demos/animation/PinchZoomDemo';
import { DragReorderDemo } from '../components/demos/animation/DragReorderDemo';
import { PullToRefreshDemo } from '../components/demos/animation/PullToRefreshDemo';
import { TabIndicatorSlideDemo } from '../components/demos/animation/TabIndicatorSlideDemo';
import { MarchingAntsDemo } from '../components/demos/animation/MarchingAntsDemo';
import { CaretBlinkDemo } from '../components/demos/animation/CaretBlinkDemo';
import { NumberTickDemo } from '../components/demos/animation/NumberTickDemo';
import { SuccessCheckDrawDemo } from '../components/demos/animation/SuccessCheckDrawDemo';

// レイアウト
import { HeroDemo } from '../components/demos/layout/HeroDemo';
import { BentoGridDemo } from '../components/demos/layout/BentoGridDemo';
import { MasonryDemo } from '../components/demos/layout/MasonryDemo';
import { StickyHeaderDemo } from '../components/demos/layout/StickyHeaderDemo';
import { SplitScreenDemo } from '../components/demos/layout/SplitScreenDemo';
import { SidebarDemo } from '../components/demos/layout/SidebarDemo';
import { HolyGrailDemo } from '../components/demos/layout/HolyGrailDemo';
import { ZPatternDemo } from '../components/demos/layout/ZPatternDemo';
import { FPatternDemo } from '../components/demos/layout/FPatternDemo';
import { AsymmetricDemo } from '../components/demos/layout/AsymmetricDemo';
import { FullBleedDemo } from '../components/demos/layout/FullBleedDemo';
import { TwoColumnDemo } from '../components/demos/layout/TwoColumnDemo';
import { CardGridDemo } from '../components/demos/layout/CardGridDemo';
import { GridSystemDemo } from '../components/demos/layout/GridSystemDemo';
import { HamburgerMenuDemo } from '../components/demos/layout/HamburgerMenuDemo';
import { MegaMenuDemo } from '../components/demos/layout/MegaMenuDemo';
import { DiagonalSectionDemo } from '../components/demos/layout/DiagonalSectionDemo';
import { CurvedDividerDemo } from '../components/demos/layout/CurvedDividerDemo';
import { OffCanvasDemo } from '../components/demos/layout/OffCanvasDemo';
import { CenteredColumnDemo } from '../components/demos/layout/CenteredColumnDemo';
import { AspectRatioBoxDemo } from '../components/demos/layout/AspectRatioBoxDemo';
import { StickyFooterDemo } from '../components/demos/layout/StickyFooterDemo';
import { TimelineDemo } from '../components/demos/layout/TimelineDemo';
import { PricingTableDemo } from '../components/demos/layout/PricingTableDemo';
import { ComparisonTableDemo } from '../components/demos/layout/ComparisonTableDemo';
import { ImageMosaicDemo } from '../components/demos/layout/ImageMosaicDemo';
import { StickySidebarDemo } from '../components/demos/layout/StickySidebarDemo';
import { ScrollSnapDemo } from '../components/demos/layout/ScrollSnapDemo';
import { MagazineDemo } from '../components/demos/layout/MagazineDemo';
import { MegaFooterDemo } from '../components/demos/layout/MegaFooterDemo';
import { FeatureListDemo } from '../components/demos/layout/FeatureListDemo';
import { FAQSectionDemo } from '../components/demos/layout/FAQSectionDemo';
import { CTABannerDemo } from '../components/demos/layout/CTABannerDemo';
import { StatsRowDemo } from '../components/demos/layout/StatsRowDemo';
import { StickyCTADemo } from '../components/demos/layout/StickyCTADemo';
import { AppShellDemo } from '../components/demos/layout/AppShellDemo';
import { TestimonialsWallDemo } from '../components/demos/layout/TestimonialsWallDemo';
import { LogoBarDemo } from '../components/demos/layout/LogoBarDemo';
import { LogoMarqueeDemo } from '../components/demos/layout/LogoMarqueeDemo';
import { NewsletterSignupDemo } from '../components/demos/layout/NewsletterSignupDemo';
import { AboutSectionDemo } from '../components/demos/layout/AboutSectionDemo';
import { TeamSectionDemo } from '../components/demos/layout/TeamSectionDemo';
import { ProcessStepsDemo } from '../components/demos/layout/ProcessStepsDemo';
import { RoadmapSectionDemo } from '../components/demos/layout/RoadmapSectionDemo';
import { AutoFitGridDemo } from '../components/demos/layout/AutoFitGridDemo';
import { SubgridLayoutDemo } from '../components/demos/layout/SubgridLayoutDemo';
import { ContainerQueryLayoutDemo } from '../components/demos/layout/ContainerQueryLayoutDemo';
import { IntrinsicGridDemo } from '../components/demos/layout/IntrinsicGridDemo';
import { QuiltLayoutDemo } from '../components/demos/layout/QuiltLayoutDemo';
import { BrokenGridDemo } from '../components/demos/layout/BrokenGridDemo';
import { AntiGridDemo } from '../components/demos/layout/AntiGridDemo';
import { MobileTabBarDemo } from '../components/demos/layout/MobileTabBarDemo';
import { PillNavDemo } from '../components/demos/layout/PillNavDemo';
import { AnchorNavDemo } from '../components/demos/layout/AnchorNavDemo';
import { FloatingActionBarDemo } from '../components/demos/layout/FloatingActionBarDemo';
import { StoryBarDemo } from '../components/demos/layout/StoryBarDemo';
import { WidgetGridDashboardDemo } from '../components/demos/layout/WidgetGridDashboardDemo';
import { FilterSidebarDemo } from '../components/demos/layout/FilterSidebarDemo';
import { ToolbarLayoutDemo } from '../components/demos/layout/ToolbarLayoutDemo';
import { ListDetailDemo } from '../components/demos/layout/ListDetailDemo';
import { ThreePaneDemo } from '../components/demos/layout/ThreePaneDemo';
import { InboxLayoutDemo } from '../components/demos/layout/InboxLayoutDemo';
import { CalendarGridDemo } from '../components/demos/layout/CalendarGridDemo';
import { DetailPageHeroDemo } from '../components/demos/layout/DetailPageHeroDemo';
import { CoverflowLayoutDemo } from '../components/demos/layout/CoverflowLayoutDemo';
import { ScrollytellingLayoutDemo } from '../components/demos/layout/ScrollytellingLayoutDemo';
import { BoxedLayoutDemo } from '../components/demos/layout/BoxedLayoutDemo';
import { FramedLayoutDemo } from '../components/demos/layout/FramedLayoutDemo';
import { OverlapLayoutDemo } from '../components/demos/layout/OverlapLayoutDemo';
import { StackedCardsDemo } from '../components/demos/layout/StackedCardsDemo';
import { SplitHeroDemo } from '../components/demos/layout/SplitHeroDemo';
import { QuoteSectionDemo } from '../components/demos/layout/QuoteSectionDemo';
import { PressCoverageDemo } from '../components/demos/layout/PressCoverageDemo';
import { PricingTierCardsDemo } from '../components/demos/layout/PricingTierCardsDemo';
import { ComparisonSliderDemo } from '../components/demos/layout/ComparisonSliderDemo';
import { DiagonalSplitDemo } from '../components/demos/layout/DiagonalSplitDemo';

// タイポ&カラー
import { KerningDemo } from '../components/demos/typography/KerningDemo';
import { LineHeightDemo } from '../components/demos/typography/LineHeightDemo';
import { DropCapDemo } from '../components/demos/typography/DropCapDemo';
import { GradientDemo } from '../components/demos/typography/GradientDemo';
import { GlassmorphismDemo } from '../components/demos/typography/GlassmorphismDemo';
import { NeumorphismDemo } from '../components/demos/typography/NeumorphismDemo';
import { DuotoneDemo } from '../components/demos/typography/DuotoneDemo';
import { MeshGradientDemo } from '../components/demos/typography/MeshGradientDemo';
import { OutlineTextDemo } from '../components/demos/typography/OutlineTextDemo';
import { TextShadowDemo } from '../components/demos/typography/TextShadowDemo';
import { VerticalTextDemo } from '../components/demos/typography/VerticalTextDemo';
import { MonochromeDemo } from '../components/demos/typography/MonochromeDemo';
import { ComplementaryDemo } from '../components/demos/typography/ComplementaryDemo';
import { BrutalismDemo } from '../components/demos/typography/BrutalismDemo';
import { GradientTextDemo } from '../components/demos/typography/GradientTextDemo';
import { VariableFontDemo } from '../components/demos/typography/VariableFontDemo';
import { HighlightDemo } from '../components/demos/typography/HighlightDemo';
import { HangingPunctuationDemo } from '../components/demos/typography/HangingPunctuationDemo';
import { SmallCapsDemo } from '../components/demos/typography/SmallCapsDemo';
import { DarkModeDemo } from '../components/demos/typography/DarkModeDemo';
import { NoiseDemo } from '../components/demos/typography/NoiseDemo';
import { AnimatedGradientDemo } from '../components/demos/typography/AnimatedGradientDemo';
import { PullQuoteDemo } from '../components/demos/typography/PullQuoteDemo';
import { TriadicDemo } from '../components/demos/typography/TriadicDemo';
import { AnalogousDemo } from '../components/demos/typography/AnalogousDemo';
import { TabularNumeralsDemo } from '../components/demos/typography/TabularNumeralsDemo';
import { LigatureDemo } from '../components/demos/typography/LigatureDemo';
import { LetterSpacingDemo } from '../components/demos/typography/LetterSpacingDemo';
import { ColorSwatchDemo } from '../components/demos/typography/ColorSwatchDemo';
import { MonochromaticDemo } from '../components/demos/typography/MonochromaticDemo';
import { PastelDemo } from '../components/demos/typography/PastelDemo';
import { EarthToneDemo } from '../components/demos/typography/EarthToneDemo';
import { IridescentDemo } from '../components/demos/typography/IridescentDemo';
import { NeonDemo } from '../components/demos/typography/NeonDemo';
import { VerticalRhythmDemo } from '../components/demos/typography/VerticalRhythmDemo';
import { DropShadowDemo } from '../components/demos/typography/DropShadowDemo';
import { AllCapsDemo } from '../components/demos/typography/AllCapsDemo';
import { MonospaceDemo } from '../components/demos/typography/MonospaceDemo';
import { ColorContrastDemo } from '../components/demos/typography/ColorContrastDemo';
import { SpacingScaleDemo } from '../components/demos/typography/SpacingScaleDemo';
import { BaselineDemo } from '../components/demos/typography/BaselineDemo';
import { XHeightDemo } from '../components/demos/typography/XHeightDemo';
import { AscenderDemo } from '../components/demos/typography/AscenderDemo';
import { DescenderDemo } from '../components/demos/typography/DescenderDemo';
import { CapHeightDemo } from '../components/demos/typography/CapHeightDemo';
import { CounterDemo } from '../components/demos/typography/CounterDemo';
import { OpticalSizeDemo } from '../components/demos/typography/OpticalSizeDemo';
import { JustificationDemo } from '../components/demos/typography/JustificationDemo';
import { WidowOrphanDemo } from '../components/demos/typography/WidowOrphanDemo';
import { LeadingDemo } from '../components/demos/typography/LeadingDemo';
import { StrokeContrastDemo } from '../components/demos/typography/StrokeContrastDemo';
import { SerifDemo } from '../components/demos/typography/SerifDemo';
import { SansSerifDemo } from '../components/demos/typography/SansSerifDemo';
import { SlabSerifDemo } from '../components/demos/typography/SlabSerifDemo';
import { DisplayFontDemo } from '../components/demos/typography/DisplayFontDemo';
import { HandwrittenDemo } from '../components/demos/typography/HandwrittenDemo';
import { PixelFontDemo } from '../components/demos/typography/PixelFontDemo';
import { BlackletterDemo } from '../components/demos/typography/BlackletterDemo';
import { MinchoDemo } from '../components/demos/typography/MinchoDemo';
import { JpGothicDemo } from '../components/demos/typography/JpGothicDemo';
import { SplitComplementaryDemo } from '../components/demos/typography/SplitComplementaryDemo';
import { TetradicDemo } from '../components/demos/typography/TetradicDemo';
import { Rule603010Demo } from '../components/demos/typography/Rule603010Demo';
import { TintsDemo } from '../components/demos/typography/TintsDemo';
import { ShadesDemo } from '../components/demos/typography/ShadesDemo';
import { TonesDemo } from '../components/demos/typography/TonesDemo';
import { SemanticColorDemo } from '../components/demos/typography/SemanticColorDemo';
import { HslDemo } from '../components/demos/typography/HslDemo';
import { OklchDemo } from '../components/demos/typography/OklchDemo';
import { SkeuomorphismDemo } from '../components/demos/typography/SkeuomorphismDemo';
import { FlatDesignDemo } from '../components/demos/typography/FlatDesignDemo';
import { MaterialDesignDemo } from '../components/demos/typography/MaterialDesignDemo';
import { MemphisDemo } from '../components/demos/typography/MemphisDemo';
import { VaporwaveDemo } from '../components/demos/typography/VaporwaveDemo';
import { Y2KDemo } from '../components/demos/typography/Y2KDemo';
import { MaximalismDemo } from '../components/demos/typography/MaximalismDemo';
import { ClaymorphismDemo } from '../components/demos/typography/ClaymorphismDemo';
import { InnerShadowDemo } from '../components/demos/typography/InnerShadowDemo';
import { RisographDemo } from '../components/demos/typography/RisographDemo';
import { HalftoneDemo } from '../components/demos/typography/HalftoneDemo';

// UIパーツ
import { ToastDemo } from '../components/demos/component/ToastDemo';
import { TooltipDemo } from '../components/demos/component/TooltipDemo';
import { AccordionDemo } from '../components/demos/component/AccordionDemo';
import { BadgeDemo } from '../components/demos/component/BadgeDemo';
import { ChipDemo } from '../components/demos/component/ChipDemo';
import { BreadcrumbDemo } from '../components/demos/component/BreadcrumbDemo';
import { FabDemo } from '../components/demos/component/FabDemo';
import { ModalDemo } from '../components/demos/component/ModalDemo';
import { SnackbarDemo } from '../components/demos/component/SnackbarDemo';
import { ProgressBarDemo } from '../components/demos/component/ProgressBarDemo';
import { SpinnerDemo } from '../components/demos/component/SpinnerDemo';
import { SwitchDemo } from '../components/demos/component/SwitchDemo';
import { SliderDemo } from '../components/demos/component/SliderDemo';
import { AvatarDemo } from '../components/demos/component/AvatarDemo';
import { StepperDemo } from '../components/demos/component/StepperDemo';
import { CarouselDemo } from '../components/demos/component/CarouselDemo';
import { EmptyStateDemo } from '../components/demos/component/EmptyStateDemo';
import { SegmentedControlDemo } from '../components/demos/component/SegmentedControlDemo';
import { DropdownDemo } from '../components/demos/component/DropdownDemo';
import { ComboboxDemo } from '../components/demos/component/ComboboxDemo';
import { DatePickerDemo } from '../components/demos/component/DatePickerDemo';
import { ColorPickerDemo } from '../components/demos/component/ColorPickerDemo';
import { FileUploadDemo } from '../components/demos/component/FileUploadDemo';
import { CheckboxDemo } from '../components/demos/component/CheckboxDemo';
import { RadioDemo } from '../components/demos/component/RadioDemo';
import { StarRatingDemo } from '../components/demos/component/StarRatingDemo';
import { PaginationDemo } from '../components/demos/component/PaginationDemo';
import { SearchBarDemo } from '../components/demos/component/SearchBarDemo';
import { BottomSheetDemo } from '../components/demos/component/BottomSheetDemo';
import { PopoverDemo } from '../components/demos/component/PopoverDemo';
import { CommandPaletteDemo } from '../components/demos/component/CommandPaletteDemo';
import { ChatBubbleDemo } from '../components/demos/component/ChatBubbleDemo';
import { FloatingLabelDemo } from '../components/demos/component/FloatingLabelDemo';
import { BannerDemo } from '../components/demos/component/BannerDemo';
import { TabsDemo } from '../components/demos/component/TabsDemo';
import { StatCardDemo } from '../components/demos/component/StatCardDemo';
import { StatusIndicatorDemo } from '../components/demos/component/StatusIndicatorDemo';
import { LikeButtonDemo } from '../components/demos/component/LikeButtonDemo';
import { NotificationBellDemo } from '../components/demos/component/NotificationBellDemo';
import { InlineEditDemo } from '../components/demos/component/InlineEditDemo';
import { TagInputDemo } from '../components/demos/component/TagInputDemo';
import { CodeBlockDemo } from '../components/demos/component/CodeBlockDemo';
import { TreeViewDemo } from '../components/demos/component/TreeViewDemo';
import { KanbanCardDemo } from '../components/demos/component/KanbanCardDemo';
import { PricingCardDemo } from '../components/demos/component/PricingCardDemo';
import { LogoCloudDemo } from '../components/demos/component/LogoCloudDemo';
import { TestimonialDemo } from '../components/demos/component/TestimonialDemo';
import { LoadingBarDemo } from '../components/demos/component/LoadingBarDemo';
import { ToggleGroupDemo } from '../components/demos/component/ToggleGroupDemo';
import { DrawerDemo } from '../components/demos/component/DrawerDemo';
import { RangeSliderDemo } from '../components/demos/component/RangeSliderDemo';
import { MultiSelectDemo } from '../components/demos/component/MultiSelectDemo';
import { NumberStepperDemo } from '../components/demos/component/NumberStepperDemo';
import { LightboxDemo } from '../components/demos/component/LightboxDemo';
import { TextareaDemo } from '../components/demos/component/TextareaDemo';
import { InputGroupDemo } from '../components/demos/component/InputGroupDemo';
import { OtpInputDemo } from '../components/demos/component/OtpInputDemo';
import { PasswordStrengthDemo } from '../components/demos/component/PasswordStrengthDemo';
import { DateRangePickerDemo } from '../components/demos/component/DateRangePickerDemo';
import { TimePickerDemo } from '../components/demos/component/TimePickerDemo';
import { PhoneInputDemo } from '../components/demos/component/PhoneInputDemo';
import { RichTextEditorDemo } from '../components/demos/component/RichTextEditorDemo';
import { MarkdownEditorDemo } from '../components/demos/component/MarkdownEditorDemo';
import { MenubarDemo } from '../components/demos/component/MenubarDemo';
import { ContextMenuDemo } from '../components/demos/component/ContextMenuDemo';
import { DataTableDemo } from '../components/demos/component/DataTableDemo';
import { DiffViewDemo } from '../components/demos/component/DiffViewDemo';
import { CalendarComponentDemo } from '../components/demos/component/CalendarComponentDemo';
import { GanttDemo } from '../components/demos/component/GanttDemo';
import { HeatmapDemo } from '../components/demos/component/HeatmapDemo';
import { DescriptionListDemo } from '../components/demos/component/DescriptionListDemo';
import { AlertDemo } from '../components/demos/component/AlertDemo';
import { ConfirmDialogDemo } from '../components/demos/component/ConfirmDialogDemo';
import { InlineValidationDemo } from '../components/demos/component/InlineValidationDemo';
import { AudioPlayerDemo } from '../components/demos/component/AudioPlayerDemo';
import { VideoPlayerDemo } from '../components/demos/component/VideoPlayerDemo';
import { ImageCropperDemo } from '../components/demos/component/ImageCropperDemo';
import { AvatarGroupDemo } from '../components/demos/component/AvatarGroupDemo';
import { CardDemo } from '../components/demos/component/CardDemo';
import { SheetDemo } from '../components/demos/component/SheetDemo';
import { DividerDemo } from '../components/demos/component/DividerDemo';
import { ResizablePanelDemo } from '../components/demos/component/ResizablePanelDemo';
import { CalloutDemo } from '../components/demos/component/CalloutDemo';
import { SparklineDemo } from '../components/demos/component/SparklineDemo';
import { GaugeDemo } from '../components/demos/component/GaugeDemo';
import { DonutChartDemo } from '../components/demos/component/DonutChartDemo';
import { KpiTileDemo } from '../components/demos/component/KpiTileDemo';
import { ChatInputDemo } from '../components/demos/component/ChatInputDemo';
import { StreamingTextDemo } from '../components/demos/component/StreamingTextDemo';
import { ToolCallCardDemo } from '../components/demos/component/ToolCallCardDemo';
import { InlineSuggestionDemo } from '../components/demos/component/InlineSuggestionDemo';
import { CitationPillDemo } from '../components/demos/component/CitationPillDemo';
import { BackToTopDemo } from '../components/demos/component/BackToTopDemo';
import { ThemeSwitcherDemo } from '../components/demos/component/ThemeSwitcherDemo';

export const TERMS: Term[] = [
  // ===== 認知心理学 =====
  { id: 'z-pattern', nameJa: 'Zパターン', nameEn: 'Z-Pattern', category: 'cognitive',
    description: '左上→右上→左下→右下とZ字に視線が動く前提でレイアウトする手法。情報量の少ないLPで効く。',
    Demo: ZPatternDemo, hasBeforeAfter: false },
  { id: 'f-pattern', nameJa: 'Fパターン', nameEn: 'F-Pattern', category: 'cognitive',
    description: 'ユーザーがF字に視線を動かす（横一線→下→もう少し短く横→下）読み方を前提に組むレイアウト。テキスト主体のページで使う。',
    Demo: FPatternDemo, hasBeforeAfter: false },
  { id: 'gutenberg', nameJa: 'グーテンベルク図式', nameEn: 'Gutenberg Diagram', category: 'cognitive',
    description: '左上(Primary)→右下(Terminal)へ視線が斜めに流れる原則。情報量の多い均一なページに当てはまる。',
    Demo: GutenbergDemo, hasBeforeAfter: false },
  { id: 'gestalt-proximity', nameJa: 'ゲシュタルト: 近接', nameEn: 'Gestalt: Proximity', category: 'cognitive',
    description: '近くに配置された要素は同じグループに見える。余白でグルーピングを表現する根拠となる原則。',
    Demo: GestaltProximityDemo, hasBeforeAfter: true },
  { id: 'gestalt-similarity', nameJa: 'ゲシュタルト: 類似', nameEn: 'Gestalt: Similarity', category: 'cognitive',
    description: '形・色・大きさが似た要素は関連付けて見える。同じ色の見出しが「同類」として認知される。',
    Demo: GestaltSimilarityDemo, hasBeforeAfter: false },
  { id: 'gestalt-closure', nameJa: 'ゲシュタルト: 閉合', nameEn: 'Gestalt: Closure', category: 'cognitive',
    description: '不完全な図形でも、脳が欠けた部分を補完して閉じた形として認識する原則。ロゴデザインで活用。',
    Demo: GestaltClosureDemo, hasBeforeAfter: false },
  { id: 'gestalt-continuity', nameJa: 'ゲシュタルト: 連続', nameEn: 'Gestalt: Continuity', category: 'cognitive',
    description: '連続した線や曲線上に並ぶ要素は、一つの流れとして認知される。',
    Demo: GestaltContinuityDemo, hasBeforeAfter: false },
  { id: 'gestalt-figure-ground', nameJa: 'ゲシュタルト: 図と地', nameEn: 'Gestalt: Figure-Ground', category: 'cognitive',
    description: '視野の中で「主役（図）」と「背景（地）」を分離して認知する原則。ルビンの壺が代表例。',
    Demo: GestaltFigureGroundDemo, hasBeforeAfter: false },
  { id: 'fitts-law', nameJa: 'フィッツの法則', nameEn: "Fitts's Law", category: 'cognitive',
    description: 'ターゲットが大きく、距離が近いほど、到達時間は短くなる。主要CTAを大きく配置する根拠。',
    Demo: FittsLawDemo, hasBeforeAfter: false },
  { id: 'hicks-law', nameJa: 'ヒックの法則', nameEn: "Hick's Law", category: 'cognitive',
    description: '選択肢の数が増えるほど、判断にかかる時間は対数的に増える。メニュー項目を絞れの根拠。',
    Demo: HicksLawDemo, hasBeforeAfter: true },
  { id: 'millers-law', nameJa: 'ミラーの法則', nameEn: "Miller's Law", category: 'cognitive',
    description: '人が短期記憶に保持できる項目数は 7±2。電話番号をハイフンで区切るのもこの原則の応用。',
    Demo: MillersLawDemo, hasBeforeAfter: true },
  { id: 'primacy-recency', nameJa: '初頭効果・新近効果', nameEn: 'Primacy & Recency Effect', category: 'cognitive',
    description: 'リストの最初と最後が記憶に残りやすい現象。重要な要素を端に配置する根拠。',
    Demo: PrimacyRecencyDemo, hasBeforeAfter: false },
  { id: 'jakobs-law', nameJa: 'ヤコブの法則', nameEn: "Jakob's Law", category: 'cognitive',
    description: 'ユーザーは「他のサイトと同じように動く」ことを期待する。慣習に従えば学習コストが下がる。',
    Demo: JakobsLawDemo, hasBeforeAfter: false },
  { id: 'aesthetic-usability', nameJa: '美的ユーザビリティ効果', nameEn: 'Aesthetic-Usability Effect', category: 'cognitive',
    description: '見た目が美しいUIは、実際よりも使いやすいと感じられる。第一印象の重要性を示す効果。',
    Demo: AestheticUsabilityDemo, hasBeforeAfter: true },
  { id: 'doherty-threshold', nameJa: 'ドハティの閾値', nameEn: 'Doherty Threshold', category: 'cognitive',
    description: 'システムの応答が400ms以内だと、ユーザーの注意が持続し生産性が大きく上がる。',
    Demo: DohertyThresholdDemo, hasBeforeAfter: false },
  { id: 'peak-end-rule', nameJa: 'ピークエンドの法則', nameEn: 'Peak-End Rule', category: 'cognitive',
    description: '体験全体の評価は、感情のピークと最後の瞬間でほぼ決まる。完了画面に気合を入れろの根拠。',
    Demo: PeakEndRuleDemo, hasBeforeAfter: false },
  { id: 'von-restorff', nameJa: 'フォン・レストルフ効果 / 隔離効果', nameEn: 'Von Restorff Effect', category: 'cognitive',
    description: '周囲と違う要素は記憶に残りやすい。主要CTAを強調色で目立たせる根拠。',
    Demo: VonRestorffDemo, hasBeforeAfter: false },
  { id: 'banner-blindness', nameJa: 'バナーブラインドネス', nameEn: 'Banner Blindness', category: 'cognitive',
    description: 'ユーザーは「広告っぽい」要素を無意識に視覚から除外する。重要な情報をバナー風にしない理由。',
    Demo: BannerBlindnessDemo, hasBeforeAfter: false },
  { id: 'gestalt-common-fate', nameJa: 'ゲシュタルト: 共通運命', nameEn: 'Gestalt: Common Fate', category: 'cognitive',
    description: '同じ方向に動く要素は1つのグループとして知覚される。リストの並び替えや展開時に活用。',
    Demo: GestaltCommonFateDemo, hasBeforeAfter: false },
  { id: 'gestalt-symmetry', nameJa: 'ゲシュタルト: 対称性', nameEn: 'Gestalt: Symmetry', category: 'cognitive',
    description: '対称な要素は安定した1つの図形として認識される。ヒーローセクションの均衡感の根拠。',
    Demo: GestaltSymmetryDemo, hasBeforeAfter: false },
  { id: 'gestalt-pragnanz', nameJa: 'ゲシュタルト: プレグナンツ', nameEn: 'Gestalt: Prägnanz', category: 'cognitive',
    description: '複雑な形を最も単純な形として解釈する傾向。ロゴ・アイコン設計の指針。',
    Demo: GestaltPragnanzDemo, hasBeforeAfter: false },
  { id: 'gestalt-common-region', nameJa: 'ゲシュタルト: 共通領域', nameEn: 'Gestalt: Common Region', category: 'cognitive',
    description: '同じ枠や背景に囲まれた要素は同じグループに見える。カードUIの根拠。',
    Demo: GestaltCommonRegionDemo, hasBeforeAfter: false },
  { id: 'gestalt-uniform-connectedness', nameJa: 'ゲシュタルト: 統一的連結', nameEn: 'Gestalt: Uniform Connectedness', category: 'cognitive',
    description: '線で繋がれた要素は強くグループ化される。ラベルと入力欄を結ぶ罫線などの根拠。',
    Demo: GestaltUniformConnectednessDemo, hasBeforeAfter: false },
  { id: 'teslers-law', nameJa: 'テスラーの法則 / 複雑性保存', nameEn: "Tesler's Law", category: 'cognitive',
    description: '不可避な複雑さは存在する。ユーザーに押し付けず、システム側で吸収せよ。',
    Demo: TeslersLawDemo, hasBeforeAfter: true },
  { id: 'postels-law', nameJa: 'ポステルの法則 / 堅牢性原則', nameEn: "Postel's Law", category: 'cognitive',
    description: '入力には寛容に、出力には厳密に。表記揺れを許してUIで整形する。',
    Demo: PostelsLawDemo, hasBeforeAfter: false },
  { id: 'goal-gradient', nameJa: '目標勾配効果', nameEn: 'Goal-Gradient Effect', category: 'cognitive',
    description: '目標に近づくほどモチベーションが上がる。プログレスバーで活用する。',
    Demo: GoalGradientDemo, hasBeforeAfter: false },
  { id: 'zeigarnik', nameJa: 'ツァイガルニク効果', nameEn: 'Zeigarnik Effect', category: 'cognitive',
    description: '未完了タスクは記憶に残りやすい。プロフィール完成度バーやドラフト保存通知で使う。',
    Demo: ZeigarnikDemo, hasBeforeAfter: false },
  { id: 'serial-position', nameJa: '系列位置効果', nameEn: 'Serial Position Effect', category: 'cognitive',
    description: 'リストの最初と最後が記憶に残りやすい。ナビゲーション項目順の根拠。',
    Demo: SerialPositionDemo, hasBeforeAfter: false },
  { id: 'pareto', nameJa: 'パレートの法則 / 80-20', nameEn: 'Pareto Principle', category: 'cognitive',
    description: 'ユーザーの80%は機能の20%しか使わない。情報設計の優先度判断に。',
    Demo: ParetoDemo, hasBeforeAfter: false },
  { id: 'chunking', nameJa: 'チャンキング', nameEn: 'Chunking', category: 'cognitive',
    description: '情報を意味のある塊に分割すると記憶しやすい。電話番号・カード番号の区切りに。',
    Demo: ChunkingDemo, hasBeforeAfter: true },
  { id: 'cognitive-load', nameJa: '認知負荷', nameEn: 'Cognitive Load', category: 'cognitive',
    description: 'ワーキングメモリ消費を最小化する。情報量・選択肢・装飾の削減指針。',
    Demo: CognitiveLoadDemo, hasBeforeAfter: true },
  { id: 'inattentional-blindness', nameJa: '非注意性盲目', nameEn: 'Inattentional Blindness', category: 'cognitive',
    description: '注意の外にある変化は見えない。重要通知は中心視野に出す根拠。',
    Demo: InattentionalBlindnessDemo, hasBeforeAfter: false },
  { id: 'change-blindness', nameJa: '変化盲', nameEn: 'Change Blindness', category: 'cognitive',
    description: 'フェードや遷移で起きた変化に気付かない。状態変化はアニメで強調すべし。',
    Demo: ChangeBlindnessDemo, hasBeforeAfter: false },
  { id: 'choice-overload', nameJa: '選択肢過多', nameEn: 'Choice Overload', category: 'cognitive',
    description: '選択肢が多すぎると決定不能になる。商品グリッドの初期表示数の根拠。',
    Demo: ChoiceOverloadDemo, hasBeforeAfter: true },
  { id: 'decoy-effect', nameJa: 'おとり効果', nameEn: 'Decoy Effect', category: 'cognitive',
    description: '第3の劣った選択肢を入れると、特定案の選択率が上がる。料金プラン3列構成の根拠。',
    Demo: DecoyEffectDemo, hasBeforeAfter: false },
  { id: 'anchoring', nameJa: 'アンカリング効果', nameEn: 'Anchoring Bias', category: 'cognitive',
    description: '最初に見た数字を基準に判断する。元値の打ち消し線表示などで活用。',
    Demo: AnchoringDemo, hasBeforeAfter: false },
  { id: 'framing', nameJa: 'フレーミング効果', nameEn: 'Framing Effect', category: 'cognitive',
    description: '同じ事実でも表現で印象が変わる。「95%成功」vs「5%失敗」。',
    Demo: FramingDemo, hasBeforeAfter: true },
  { id: 'loss-aversion', nameJa: '損失回避', nameEn: 'Loss Aversion', category: 'cognitive',
    description: '得る喜びより失う痛みが大きい（約2倍）。「無料期間あと3日」訴求に使う。',
    Demo: LossAversionDemo, hasBeforeAfter: false },
  { id: 'endowment', nameJa: '保有効果', nameEn: 'Endowment Effect', category: 'cognitive',
    description: '持っているものを過大評価する。お試し期間・カート保存・パーソナライズで活用。',
    Demo: EndowmentDemo, hasBeforeAfter: false },
  { id: 'sunk-cost', nameJa: 'サンクコスト効果', nameEn: 'Sunk Cost Fallacy', category: 'cognitive',
    description: '既に投じた時間・お金が惜しくて続けてしまう。長いオンボーディングや進捗保存に。',
    Demo: SunkCostDemo, hasBeforeAfter: false },
  { id: 'ikea-effect', nameJa: 'IKEA効果', nameEn: 'IKEA Effect', category: 'cognitive',
    description: '自分で作ったものに高い価値を感じる。カスタマイズUI・パーソナライズで活用。',
    Demo: IkeaEffectDemo, hasBeforeAfter: false },
  { id: 'confirmation-bias', nameJa: '確証バイアス', nameEn: 'Confirmation Bias', category: 'cognitive',
    description: '既存の信念を補強する情報を選ぶ。レコメンドのフィルタバブル設計上の倫理問題。',
    Demo: ConfirmationBiasDemo, hasBeforeAfter: false },
  { id: 'bandwagon', nameJa: 'バンドワゴン効果', nameEn: 'Bandwagon Effect', category: 'cognitive',
    description: '多数派に従う心理。「10万人が登録」「人気No.1」表示で活用。',
    Demo: BandwagonDemo, hasBeforeAfter: false },
  { id: 'social-proof', nameJa: '社会的証明', nameEn: 'Social Proof', category: 'cognitive',
    description: '他人の行動を判断基準にする。レビュー・利用社ロゴ・リアルタイム通知で活用。',
    Demo: SocialProofDemo, hasBeforeAfter: false },
  { id: 'authority-bias', nameJa: '権威バイアス', nameEn: 'Authority Bias', category: 'cognitive',
    description: '専門家・有名ブランドの意見を重視する。受賞バッジ・著名人推薦で活用。',
    Demo: AuthorityBiasDemo, hasBeforeAfter: false },
  { id: 'scarcity', nameJa: '希少性原則', nameEn: 'Scarcity', category: 'cognitive',
    description: '残り少ないものを欲しがる。「残り3点」「24時間限定」表示。',
    Demo: ScarcityDemo, hasBeforeAfter: false },
  { id: 'reciprocity', nameJa: '返報性', nameEn: 'Reciprocity', category: 'cognitive',
    description: '与えられたら返したくなる。無料お試し・無料DLで本登録へ誘導。',
    Demo: ReciprocityDemo, hasBeforeAfter: false },
  { id: 'commitment-consistency', nameJa: 'コミットメント・一貫性', nameEn: 'Commitment & Consistency', category: 'cognitive',
    description: '小さなYESが大きなYESを引き出す。段階的フォームに使う。',
    Demo: CommitmentConsistencyDemo, hasBeforeAfter: false },
  { id: 'curiosity-gap', nameJa: 'キュリオシティギャップ', nameEn: 'Curiosity Gap', category: 'cognitive',
    description: '情報の欠落が好奇心を生む。記事タイトル・ティーザーで活用。',
    Demo: CuriosityGapDemo, hasBeforeAfter: false },
  { id: 'picture-superiority', nameJa: '画像優位性効果', nameEn: 'Picture Superiority Effect', category: 'cognitive',
    description: 'テキストより画像のほうが記憶される。アイコン併用ナビの根拠。',
    Demo: PictureSuperiorityDemo, hasBeforeAfter: true },
  { id: 'affordance', nameJa: 'アフォーダンス', nameEn: 'Affordance', category: 'cognitive',
    description: '形状・見た目が操作可能性を示唆する。ボタンらしさ・スワイプヒント。',
    Demo: AffordanceDemo, hasBeforeAfter: true },
  { id: 'signifier', nameJa: 'シグニファイア', nameEn: 'Signifier', category: 'cognitive',
    description: '操作可能性を明示する記号（矢印・アイコン）。隠れUIを避ける根拠。',
    Demo: SignifierDemo, hasBeforeAfter: false },
  { id: 'mapping', nameJa: 'マッピング / 自然な対応付け', nameEn: 'Mapping', category: 'cognitive',
    description: 'コントロールとその効果が空間的に対応する。スライダー・ボリュームUI。',
    Demo: MappingDemo, hasBeforeAfter: false },
  { id: 'recognition-recall', nameJa: '認識 > 想起', nameEn: 'Recognition over Recall', category: 'cognitive',
    description: 'ユーザーに思い出させず選ばせる。オートコンプリート・履歴・アイコン併記。',
    Demo: RecognitionRecallDemo, hasBeforeAfter: true },
  { id: 'mere-exposure', nameJa: '単純接触効果', nameEn: 'Mere Exposure Effect', category: 'cognitive',
    description: '接触回数が多いものを好ましく感じる。ブランドカラー・ロゴの一貫露出。',
    Demo: MereExposureDemo, hasBeforeAfter: false },
  { id: 'center-stage', nameJa: 'センターステージ効果', nameEn: 'Center-Stage Effect', category: 'cognitive',
    description: '中央に置かれた選択肢が選ばれやすい。料金表中央の「おすすめ」プラン。',
    Demo: CenterStageDemo, hasBeforeAfter: false },
  { id: 'locality', nameJa: '局所性の法則', nameEn: 'Law of Locality', category: 'cognitive',
    description: '操作に関連する情報・コントロールはその近くに置く。インラインバリデーションの根拠。',
    Demo: LocalityDemo, hasBeforeAfter: true },
  { id: 'selective-attention', nameJa: '選択的注意', nameEn: 'Selective Attention', category: 'cognitive',
    description: '関心ある対象だけに集中し他は見ない。重要要素は視覚階層で強く差別化する。',
    Demo: SelectiveAttentionDemo, hasBeforeAfter: false },

  // ===== アニメーション =====
  { id: 'parallax', nameJa: '視差効果', nameEn: 'Parallax', category: 'animation',
    description: 'スクロールに応じて、背景と前景が異なる速度で動くことで奥行きを感じさせる効果。レイヤー間に遠近感が生まれる。',
    Demo: ParallaxDemo, hasBeforeAfter: true },
  { id: 'fade-in', nameJa: 'フェードイン', nameEn: 'Fade In', category: 'animation',
    description: '不透明度0から100%に変化することで、要素がじわっと現れる演出。読み込み時や要素登場時によく使う。',
    Demo: FadeInDemo, hasBeforeAfter: true },
  { id: 'hover-lift', nameJa: 'ホバーリフト', nameEn: 'Hover Lift', category: 'animation',
    description: 'マウスを乗せると要素がふわっと持ち上がる効果。影と少しの平行移動で「触れる」感を出す。カードUIで頻出。',
    Demo: HoverLiftDemo, hasBeforeAfter: true },
  { id: 'ripple', nameJa: '波紋エフェクト', nameEn: 'Ripple', category: 'animation',
    description: 'クリックした地点から円が広がるアニメーション。Material Designで採用され、タッチのフィードバックに使われる。',
    Demo: RippleDemo, hasBeforeAfter: false },
  { id: 'marquee', nameJa: 'マーキー', nameEn: 'Marquee', category: 'animation',
    description: 'テキストや画像が一方向に流れ続ける表現。ロゴ列やお知らせバー、見出しの装飾などに使う。',
    Demo: MarqueeDemo, hasBeforeAfter: false },
  { id: 'skeleton', nameJa: 'スケルトンローディング', nameEn: 'Skeleton Loading', category: 'animation',
    description: 'コンテンツが読み込まれる前に、形状のプレースホルダーを表示してシマーアニメーションで揺らす手法。体感速度を改善する。',
    Demo: SkeletonDemo, hasBeforeAfter: true },
  { id: 'scroll-reveal', nameJa: 'スクロールリビール', nameEn: 'Scroll Reveal', category: 'animation',
    description: 'スクロールで画面に入ったタイミングで、要素が下や横から滑り込んで現れる演出。',
    Demo: ScrollRevealDemo, hasBeforeAfter: true },
  { id: 'pulse', nameJa: 'パルス', nameEn: 'Pulse', category: 'animation',
    description: '中心から波紋のように外側へ広がる拍動効果。「ここに注目して」と促すインジケータや通知ドットでよく使う。',
    Demo: PulseDemo, hasBeforeAfter: true },
  { id: 'spin', nameJa: 'スピン / 回転ローダー', nameEn: 'Spin', category: 'animation',
    description: 'リングや要素が回り続けるローディング表示。処理中であることを示す最もポピュラーな表現。',
    Demo: SpinDemo, hasBeforeAfter: false },
  { id: 'typewriter', nameJa: 'タイプライター', nameEn: 'Typewriter', category: 'animation',
    description: '一文字ずつ打ち込まれるようにテキストが現れる演出。カーソルの点滅を添えるのが定番。',
    Demo: TypewriterDemo, hasBeforeAfter: true },
  { id: 'bounce', nameJa: 'バウンス', nameEn: 'Bounce', category: 'animation',
    description: 'ボールが跳ねるように、上下に弾みながら動くアニメーション。スクロール誘導や通知の強調に使う。',
    Demo: BounceDemo, hasBeforeAfter: false },
  { id: 'shake', nameJa: 'シェイク', nameEn: 'Shake', category: 'animation',
    description: '横にぶるぶる揺れる動き。入力エラーなど「ダメ」を瞬時に伝えるエラーフィードバックに使う。',
    Demo: ShakeDemo, hasBeforeAfter: true },
  { id: 'glitch', nameJa: 'グリッチ', nameEn: 'Glitch', category: 'animation',
    description: '故障した画面のように文字がズレて二重に光る演出。サイバー/ゲーム系の演出で使われる。',
    Demo: GlitchDemo, hasBeforeAfter: true },
  { id: 'reveal-mask', nameJa: 'マスクリビール', nameEn: 'Reveal Mask', category: 'animation',
    description: '帯状のマスクが横切ることでテキストや画像が現れる演出。ヒーローセクションの導入で映える。',
    Demo: RevealMaskDemo, hasBeforeAfter: true },
  { id: 'wiggle', nameJa: 'ウィグル', nameEn: 'Wiggle', category: 'animation',
    description: 'くねくねと小さく回転する遊び心のある動き。アイコンの強調や「振る」操作のヒントに使う。',
    Demo: WiggleDemo, hasBeforeAfter: true },
  { id: 'morph', nameJa: 'モーフ / 形状変化', nameEn: 'Morph', category: 'animation',
    description: '輪郭が滑らかに変形しつづける有機的なアニメーション。流体的な装飾や背景のアクセントに。',
    Demo: MorphDemo, hasBeforeAfter: false },
  { id: 'stagger', nameJa: 'ステガー / 順番アニメ', nameEn: 'Stagger', category: 'animation',
    description: '複数の要素が少しずつ時間をずらして動き出すこと。リストの登場や音波の上下動に使う。',
    Demo: StaggerDemo, hasBeforeAfter: false },
  { id: 'zoom', nameJa: 'ズーム', nameEn: 'Zoom', category: 'animation',
    description: '要素が拡大しながら現れる/縮小しながら消える効果。注目を集めたいCTAなどで使う。',
    Demo: ZoomDemo, hasBeforeAfter: true },
  { id: 'slide-in', nameJa: 'スライドイン', nameEn: 'Slide In', category: 'animation',
    description: '画面外から横や下に滑り込んでくる動き。通知やパネルの登場に使う、最もよく使われる遷移の一つ。',
    Demo: SlideInDemo, hasBeforeAfter: true },
  { id: 'flip-card', nameJa: 'フリップカード', nameEn: 'Flip Card', category: 'animation',
    description: 'カードを3D回転させて裏面を見せる演出。ヒントの開示やゲーミフィケーションに。',
    Demo: FlipCardDemo, hasBeforeAfter: false },
  { id: 'magnetic', nameJa: 'マグネティック', nameEn: 'Magnetic', category: 'animation',
    description: 'マウスカーソルに引き寄せられるようにボタンが動く効果。CTAを目立たせる演出として使う。',
    Demo: MagneticDemo, hasBeforeAfter: false },
  { id: 'cursor-follow', nameJa: 'カーソル追従', nameEn: 'Cursor Follow', category: 'animation',
    description: 'カーソルに連動して別のオブジェクトが追従する演出。ブランドサイトの遊び心ある演出として使う。',
    Demo: CursorFollowDemo, hasBeforeAfter: false },
  { id: 'counter-up', nameJa: 'カウントアップ', nameEn: 'Counter Up', category: 'animation',
    description: '0から目標数値まで一気にカウントアップする数字アニメーション。実績の見せ場で使う。',
    Demo: CounterUpDemo, hasBeforeAfter: false },
  { id: 'confetti', nameJa: '紙吹雪 / コンフェッティ', nameEn: 'Confetti', category: 'animation',
    description: '達成や成功を祝うときに散る紙吹雪。完了画面や購入完了などの祝祭演出に。',
    Demo: ConfettiDemo, hasBeforeAfter: false },
  { id: 'page-transition', nameJa: 'ページ遷移', nameEn: 'Page Transition', category: 'animation',
    description: 'ページ切り替えのタイミングで暗幕が横切るなどの装飾的なトランジション。SPAらしい滑らかさを演出する。',
    Demo: PageTransitionDemo, hasBeforeAfter: false },
  { id: 'liquid-blob', nameJa: '液体ブロブ', nameEn: 'Liquid Blob', category: 'animation',
    description: 'ぼかしの効いた色塊がゆっくり浮遊する装飾。ヒーロー背景でよく見る有機的な雰囲気作りに。',
    Demo: LiquidBlobDemo, hasBeforeAfter: false },
  { id: 'path-animation', nameJa: 'パスアニメーション / 線描画', nameEn: 'Path Animation', category: 'animation',
    description: 'SVGの線が、まるで手描きのように少しずつ描かれていくアニメーション。ロゴ表示やチェックマーク演出に使う。',
    Demo: PathAnimationDemo, hasBeforeAfter: false },
  { id: 'tilt', nameJa: 'チルト / 3D傾き', nameEn: 'Tilt', category: 'animation',
    description: 'マウス位置に応じてカードを3Dで傾ける表現。立体的な操作感を出せる、ブランドサイトで頻出の演出。',
    Demo: TiltDemo, hasBeforeAfter: false },
  { id: 'hover-glow', nameJa: 'ホバーグロー', nameEn: 'Hover Glow', category: 'animation',
    description: '要素の周囲がぼんやり光る装飾。ネオン感のあるダーク系UIでボタンや見出しの強調に使う。',
    Demo: HoverGlowDemo, hasBeforeAfter: false },
  { id: 'text-reveal', nameJa: 'テキストリビール', nameEn: 'Text Reveal', category: 'animation',
    description: '文字を1文字ずつ下から立ち上がるように出す演出。ヒーローの見出しなどで強い印象を残す。',
    Demo: TextRevealDemo, hasBeforeAfter: true },
  { id: 'skew', nameJa: 'スキュー / 傾斜', nameEn: 'Skew', category: 'animation',
    description: '要素を斜めに歪ませる変形。スピード感や勢いを表現したいときに使う。',
    Demo: SkewDemo, hasBeforeAfter: true },
  { id: 'heartbeat', nameJa: 'ハートビート / 鼓動', nameEn: 'Heartbeat', category: 'animation',
    description: '拍動するように2回連続して拡大→収縮する動き。「いいね」や愛情を示すアイコンに使う。',
    Demo: HeartbeatDemo, hasBeforeAfter: false },
  { id: 'jelly', nameJa: 'ジェリー / スクイッシュ', nameEn: 'Jelly', category: 'animation',
    description: 'ゼリーのように縦横に伸び縮みする動き。柔らかく可愛らしい操作フィードバックに使う。',
    Demo: JellyDemo, hasBeforeAfter: false },
  { id: 'particle', nameJa: 'パーティクル', nameEn: 'Particle', category: 'animation',
    description: '小さな粒子が漂う・舞い上がる装飾アニメーション。ヒーロー背景や演出効果に。',
    Demo: ParticleDemo, hasBeforeAfter: false },
  { id: 'floating', nameJa: 'フローティング', nameEn: 'Floating', category: 'animation',
    description: '要素が上下にゆっくりふわふわ漂う動き。装飾アイコンや空気感を出したい要素に使う。',
    Demo: FloatingDemo, hasBeforeAfter: false },
  { id: 'wave-text', nameJa: 'ウェーブテキスト', nameEn: 'Wave Text', category: 'animation',
    description: '文字を波打つように上下に揺らす演出。一文字ずつ時間差で動かして波を表現する。',
    Demo: WaveTextDemo, hasBeforeAfter: false },
  { id: 'color-cycle', nameJa: 'カラーサイクル', nameEn: 'Color Cycle', category: 'animation',
    description: '色がループしながら変化し続ける動き。CTAボタンや装飾の色変化として使う。',
    Demo: ColorCycleDemo, hasBeforeAfter: false },
  { id: 'iris', nameJa: 'アイリス / 円形ワイプ', nameEn: 'Iris', category: 'animation',
    description: '中央から円形に画面が開いていく/閉じていく遷移。映画的なシーンチェンジに使う。',
    Demo: IrisDemo, hasBeforeAfter: false },
  { id: 'glow-pulse', nameJa: 'グロウパルス', nameEn: 'Glow Pulse', category: 'animation',
    description: '光のオーラが拡縮するように脈打つ発光。新着・ライブ表示などに使う。',
    Demo: GlowPulseDemo, hasBeforeAfter: false },
  { id: 'easing-curve', nameJa: 'イージング曲線', nameEn: 'Easing Curve', category: 'animation',
    description: 'アニメーションの加減速カーブ。linear / ease-in / ease-out / cubic-bezier など。動きの気持ちよさを決める要。',
    Demo: EasingCurveDemo, hasBeforeAfter: false },
  { id: 'smooth-scroll', nameJa: 'スムーズスクロール', nameEn: 'Smooth Scroll', category: 'animation',
    description: 'ジャンプではなく滑らかな減速でスクロールが止まる挙動。CSSの scroll-behavior: smooth で実現。',
    Demo: SmoothScrollDemo, hasBeforeAfter: false },
  { id: 'cascade', nameJa: 'カスケード / 連鎖アニメ', nameEn: 'Cascade', category: 'animation',
    description: '滝のように上から下へ順番に時間差で要素が現れるアニメ。Staggerと近いが連続的な流れ感が強い。',
    Demo: CascadeDemo, hasBeforeAfter: false },
  { id: 'spotlight', nameJa: 'スポットライト', nameEn: 'Spotlight', category: 'animation',
    description: '暗い背景の一部だけ円形に明るくしてフォーカスを集める演出。ツアー機能などで使う。',
    Demo: SpotlightDemo, hasBeforeAfter: false },
  { id: 'hover-reveal', nameJa: 'ホバーリビール', nameEn: 'Hover Reveal', category: 'animation',
    description: 'ホバー時にカード上にオーバーレイが現れて詳細を表示する演出。ポートフォリオサイトで頻出。',
    Demo: HoverRevealDemo, hasBeforeAfter: false },
  { id: 'anticipation', nameJa: 'アンティシペーション / 予備動作', nameEn: 'Anticipation', category: 'animation',
    description: '本動作の前に逆方向へわずかに動いて「これから動きますよ」と予告するアニメーション原則。',
    Demo: AnticipationDemo, hasBeforeAfter: true },
  { id: 'squash-stretch', nameJa: 'スカッシュ＆ストレッチ', nameEn: 'Squash & Stretch', category: 'animation',
    description: '押し込まれて潰れ、離すと伸びる弾性のある質量感を表現する原則。',
    Demo: SquashStretchDemo, hasBeforeAfter: true },
  { id: 'follow-through', nameJa: 'フォロースルー', nameEn: 'Follow Through', category: 'animation',
    description: '主要な動きが止まった後も末端の要素が慣性で揺れて遅れて停止する。',
    Demo: FollowThroughDemo, hasBeforeAfter: true },
  { id: 'overshoot', nameJa: 'オーバーシュート', nameEn: 'Overshoot', category: 'animation',
    description: '目標位置を一度通り過ぎてから戻る、行き過ぎ動作。スプリング感を演出。',
    Demo: OvershootDemo, hasBeforeAfter: true },
  { id: 'spring', nameJa: 'スプリング', nameEn: 'Spring', category: 'animation',
    description: 'バネ物理に基づき、振動しながら目標値に収束する動き。',
    Demo: SpringDemo, hasBeforeAfter: true },
  { id: 'inertia', nameJa: 'イナーシャ / 慣性', nameEn: 'Inertia', category: 'animation',
    description: '指を離した後も慣性で動き続け、摩擦で減速して停止する。',
    Demo: InertiaDemo, hasBeforeAfter: true },
  { id: 'rubber-band', nameJa: 'ラバーバンド', nameEn: 'Rubber Band', category: 'animation',
    description: 'スクロール端で引き伸ばされ、離すとゴムのように戻る挙動。iOS定番。',
    Demo: RubberBandDemo, hasBeforeAfter: true },
  { id: 'snap', nameJa: 'スナップ', nameEn: 'Snap', category: 'animation',
    description: '一定距離まで来ると目標位置に吸着するように飛びつく動き。',
    Demo: SnapDemo, hasBeforeAfter: false },
  { id: 'scrub', nameJa: 'スクラブ', nameEn: 'Scrub', category: 'animation',
    description: 'スクロール進行度に動画再生のように同期して時間軸を進める。',
    Demo: ScrubDemo, hasBeforeAfter: false },
  { id: 'pin-sticky-hold', nameJa: 'ピンスティッキーホールド', nameEn: 'Pin / Sticky Hold', category: 'animation',
    description: '一定スクロール区間で要素を固定し、その間に内部アニメを進める演出。',
    Demo: PinStickyHoldDemo, hasBeforeAfter: false },
  { id: 'horizontal-scroll-hijack', nameJa: '横スクロールハイジャック', nameEn: 'Horizontal Scroll Hijack', category: 'animation',
    description: '縦スクロール操作を横方向の動きへ変換するセクション演出。',
    Demo: HorizontalScrollHijackDemo, hasBeforeAfter: false },
  { id: 'sticky-stack', nameJa: 'スティッキースタック', nameEn: 'Sticky Stack', category: 'animation',
    description: 'カードが次々と上に重なり積まれていくスクロール演出。',
    Demo: StickyStackDemo, hasBeforeAfter: false },
  { id: 'shimmer', nameJa: 'シマー', nameEn: 'Shimmer', category: 'animation',
    description: 'スケルトン上を斜めの光沢が走り、読み込み中を示す装飾アニメ。',
    Demo: ShimmerDemo, hasBeforeAfter: false },
  { id: 'progress-ring', nameJa: 'プログレスリング', nameEn: 'Progress Ring', category: 'animation',
    description: '円弧が時計回りに描かれ進捗率を表す円形プログレスインジケータ。',
    Demo: ProgressRingDemo, hasBeforeAfter: false },
  { id: 'number-roll', nameJa: 'ナンバーロール', nameEn: 'Number Roll', category: 'animation',
    description: 'スロット風に数字桁が縦に回転し新しい値に切り替わる。',
    Demo: NumberRollDemo, hasBeforeAfter: true },
  { id: 'text-scramble', nameJa: 'テキストスクランブル', nameEn: 'Text Scramble', category: 'animation',
    description: 'ランダム文字を高速に切り替えながら正しい文字に収束させる暗号解読風演出。',
    Demo: TextScrambleDemo, hasBeforeAfter: true },
  { id: 'split-text', nameJa: 'スプリットテキスト', nameEn: 'Split Text', category: 'animation',
    description: '文字／単語／行単位に分解し、各々をずらして動かすアニメーション。',
    Demo: SplitTextDemo, hasBeforeAfter: true },
  { id: 'variable-font-morph', nameJa: 'バリアブルフォントモーフ', nameEn: 'Variable Font Morph', category: 'animation',
    description: '可変フォントのウェイトや幅の軸を連続変化させて文字形状を変形させる。',
    Demo: VariableFontMorphDemo, hasBeforeAfter: true },
  { id: 'underline-sweep', nameJa: 'アンダーラインスイープ', nameEn: 'Underline Sweep', category: 'animation',
    description: 'ホバーで下線が左から右へ伸び、外すと消えるリンク表現。',
    Demo: UnderlineSweepDemo, hasBeforeAfter: true },
  { id: 'word-cycle', nameJa: 'ワードサイクル', nameEn: 'Word Cycle', category: 'animation',
    description: '同位置で単語が縦にスクロールし入れ替わる見出し演出。',
    Demo: WordCycleDemo, hasBeforeAfter: true },
  { id: 'gradient-flow', nameJa: 'グラデーションフロー', nameEn: 'Gradient Flow', category: 'animation',
    description: '背景グラデーションの色相位置が時間とともに流れるように変化する。',
    Demo: GradientFlowDemo, hasBeforeAfter: false },
  { id: 'aurora', nameJa: 'オーロラ', nameEn: 'Aurora', category: 'animation',
    description: 'ぼかしたカラーブロブが背景でゆらぐオーロラ状のアンビエント演出。',
    Demo: AuroraDemo, hasBeforeAfter: false },
  { id: 'grain-noise', nameJa: 'グレインノイズ', nameEn: 'Grain Noise', category: 'animation',
    description: '微細な粒子ノイズが常時揺らぎ、フィルム的質感を与える。',
    Demo: GrainNoiseDemo, hasBeforeAfter: false },
  { id: 'caustics', nameJa: 'コースティクス', nameEn: 'Caustics', category: 'animation',
    description: '水面越しの光紋のような明暗パターンが揺らぎ続ける装飾。',
    Demo: CausticsDemo, hasBeforeAfter: false },
  { id: 'conic-sweep', nameJa: 'コニックスイープ', nameEn: 'Conic Sweep', category: 'animation',
    description: '中心から放射状のコニックグラデーションがレーダーのように回転する。',
    Demo: ConicSweepDemo, hasBeforeAfter: false },
  { id: 'halftone-dither', nameJa: 'ハーフトーンディザ', nameEn: 'Halftone Dither', category: 'animation',
    description: '網点パターンの密度を変化させ、画像が現像されるように現れる。',
    Demo: HalftoneDitherDemo, hasBeforeAfter: true },
  { id: 'ink-bleed', nameJa: 'インクブリード', nameEn: 'Ink Bleed', category: 'animation',
    description: 'インクが紙にじむように境界がぼやけ広がりながら塗りつぶされる。',
    Demo: InkBleedDemo, hasBeforeAfter: false },
  { id: 'cross-dissolve', nameJa: 'クロスディゾルブ', nameEn: 'Cross Dissolve', category: 'animation',
    description: '旧状態がフェードアウトしつつ新状態がフェードインし重なる遷移。',
    Demo: CrossDissolveDemo, hasBeforeAfter: true },
  { id: 'push-slide', nameJa: 'プッシュスライド', nameEn: 'Push Slide', category: 'animation',
    description: '旧コンテンツが押し出される形で新コンテンツが横から流入する遷移。',
    Demo: PushSlideDemo, hasBeforeAfter: true },
  { id: 'rotate-in', nameJa: 'ローテートイン', nameEn: 'Rotate In', category: 'animation',
    description: '回転しながら出現し、最終位置で角度がゼロになる入場演出。',
    Demo: RotateInDemo, hasBeforeAfter: true },
  { id: 'long-press-hold', nameJa: 'ロングプレスホールド', nameEn: 'Long Press Hold', category: 'animation',
    description: '押し続けると進行リングや塗りが進み確定する確認系操作。',
    Demo: LongPressHoldDemo, hasBeforeAfter: false },
  { id: 'swipe-to-reveal', nameJa: 'スワイプリビール', nameEn: 'Swipe to Reveal', category: 'animation',
    description: '横スワイプで隠れていた操作ボタンが下から露出する挙動。',
    Demo: SwipeToRevealDemo, hasBeforeAfter: false },
  { id: 'pinch-zoom', nameJa: 'ピンチズーム', nameEn: 'Pinch Zoom', category: 'animation',
    description: '二本指の開閉で要素を連続的に拡大／縮小するジェスチャー。',
    Demo: PinchZoomDemo, hasBeforeAfter: false },
  { id: 'drag-reorder', nameJa: 'ドラッグリオーダー', nameEn: 'Drag Reorder', category: 'animation',
    description: 'ドラッグ中の要素に周囲が押し退けられるように動き並び順を変える。',
    Demo: DragReorderDemo, hasBeforeAfter: false },
  { id: 'pull-to-refresh', nameJa: 'プルトゥリフレッシュ', nameEn: 'Pull to Refresh', category: 'animation',
    description: '上端を引き下げると弾性インジケータが伸び、離すと更新が始まる。',
    Demo: PullToRefreshDemo, hasBeforeAfter: false },
  { id: 'tab-indicator-slide', nameJa: 'タブインジケータスライド', nameEn: 'Tab Indicator Slide', category: 'animation',
    description: 'アクティブ下線が選択タブへ滑らかにスライド移動する演出。',
    Demo: TabIndicatorSlideDemo, hasBeforeAfter: false },
  { id: 'marching-ants', nameJa: 'マーチングアンツ', nameEn: 'Marching Ants', category: 'animation',
    description: '選択範囲の点線が常時流れて選択中であることを示す。',
    Demo: MarchingAntsDemo, hasBeforeAfter: false },
  { id: 'caret-blink', nameJa: 'キャレットブリンク', nameEn: 'Caret Blink', category: 'animation',
    description: '入力カーソルが等間隔で点滅し入力可能位置を示す。',
    Demo: CaretBlinkDemo, hasBeforeAfter: false },
  { id: 'number-tick', nameJa: 'ナンバーティック', nameEn: 'Number Tick', category: 'animation',
    description: '数字が一桁ずつパタパタとフラップ表示で更新される空港表示風アニメ。',
    Demo: NumberTickDemo, hasBeforeAfter: false },
  { id: 'success-check-draw', nameJa: 'サクセスチェック描画', nameEn: 'Success Check Draw', category: 'animation',
    description: 'チェックマークのストロークが起点から終点へ描画される完了表現。',
    Demo: SuccessCheckDrawDemo, hasBeforeAfter: false },

  // ===== レイアウト =====
  { id: 'hero', nameJa: 'ヒーローセクション', nameEn: 'Hero Section', category: 'layout',
    description: 'ページ最上部の大きなビジュアル領域。キャッチコピーとCTAボタンを置き、第一印象を決める。',
    Demo: HeroDemo, hasBeforeAfter: false },
  { id: 'bento', nameJa: 'ベントグリッド', nameEn: 'Bento Grid', category: 'layout',
    description: 'お弁当箱のように大小の長方形を組み合わせたグリッド。Apple/Notionなどで使われ、情報の優先度を視覚化できる。',
    Demo: BentoGridDemo, hasBeforeAfter: false },
  { id: 'masonry', nameJa: 'メイソンリー', nameEn: 'Masonry', category: 'layout',
    description: '高さの異なる要素を石垣のように積むレイアウト。Pinterestが代表例。画像の比率を保ったまま並べられる。',
    Demo: MasonryDemo, hasBeforeAfter: false },
  { id: 'sticky-header', nameJa: 'スティッキーヘッダー', nameEn: 'Sticky Header', category: 'layout',
    description: 'スクロールしても画面上部に固定され続けるヘッダー。常時アクセスしたいナビゲーションに使う。',
    Demo: StickyHeaderDemo, hasBeforeAfter: true },
  { id: 'split-screen', nameJa: 'スプリットスクリーン', nameEn: 'Split Screen', category: 'layout',
    description: '画面を左右（または上下）に大きく分割し、2つの選択肢や対比要素を並べるレイアウト。',
    Demo: SplitScreenDemo, hasBeforeAfter: false },
  { id: 'sidebar', nameJa: 'サイドバー / ドロワー', nameEn: 'Sidebar / Drawer', category: 'layout',
    description: '画面の左右から出てくるメニュー領域。常時表示するサイドバーと、開閉式のドロワーがある。',
    Demo: SidebarDemo, hasBeforeAfter: true },
  { id: 'holy-grail', nameJa: '聖杯レイアウト', nameEn: 'Holy Grail', category: 'layout',
    description: 'ヘッダー＋フッターと、左右のサイドバー＋中央のメインを組み合わせた古典的な5分割レイアウト。',
    Demo: HolyGrailDemo, hasBeforeAfter: false },
  // (Z-Pattern / F-Pattern は cognitive カテゴリへ移動済み)
  { id: 'asymmetric', nameJa: '非対称レイアウト', nameEn: 'Asymmetric', category: 'layout',
    description: '左右の要素サイズを意図的に変えて緊張感やリズムを生むレイアウト。動きと洗練を出したいときに使う。',
    Demo: AsymmetricDemo, hasBeforeAfter: false },
  { id: 'full-bleed', nameJa: 'フルブリード', nameEn: 'Full-bleed', category: 'layout',
    description: '画像や背景を本文の左右余白を超えて画面端いっぱいまで広げる手法。インパクトと没入感が出る。',
    Demo: FullBleedDemo, hasBeforeAfter: true },
  { id: 'two-column', nameJa: '2カラム', nameEn: 'Two-column', category: 'layout',
    description: 'メインコンテンツ＋サイドバーの2列構成。ブログ・ドキュメントで頻出。',
    Demo: TwoColumnDemo, hasBeforeAfter: false },
  { id: 'card-grid', nameJa: 'カードグリッド', nameEn: 'Card Grid', category: 'layout',
    description: '同じ型のカードを格子状に並べたレイアウト。商品一覧やブログ記事一覧などで使う。',
    Demo: CardGridDemo, hasBeforeAfter: false },
  { id: 'grid-system', nameJa: '12カラムグリッド', nameEn: 'Grid System', category: 'layout',
    description: 'デザインの基準となる列の枠組み。12分割が一般的で、要素を2/3/4/6/12カラムで組み合わせて使う。',
    Demo: GridSystemDemo, hasBeforeAfter: false },
  { id: 'hamburger-menu', nameJa: 'ハンバーガーメニュー', nameEn: 'Hamburger Menu', category: 'layout',
    description: '3本線アイコンを押すと表示されるモバイル向けメニュー。タップで✕に変形するのが定番。',
    Demo: HamburgerMenuDemo, hasBeforeAfter: false },
  { id: 'mega-menu', nameJa: 'メガメニュー', nameEn: 'Mega Menu', category: 'layout',
    description: 'ヘッダーから大きく開く、複数列レイアウトのナビゲーション。商品カテゴリーが多いサイトで使う。',
    Demo: MegaMenuDemo, hasBeforeAfter: false },
  { id: 'diagonal-section', nameJa: '斜め分割セクション', nameEn: 'Diagonal Section', category: 'layout',
    description: 'セクション境界を斜めにしてダイナミックな印象を出すレイアウト。CSSのclip-pathで作る。',
    Demo: DiagonalSectionDemo, hasBeforeAfter: false },
  { id: 'curved-divider', nameJa: '波線区切り', nameEn: 'Curved Divider', category: 'layout',
    description: 'セクションの境界をSVGの波線で柔らかく区切る装飾。可愛いめ・優しい印象のサイトでよく使う。',
    Demo: CurvedDividerDemo, hasBeforeAfter: false },
  { id: 'off-canvas', nameJa: 'オフキャンバス', nameEn: 'Off-canvas', category: 'layout',
    description: '画面外（右や左）に隠れた領域からスライドして出てくるパネル。設定・通知・カートなどで使う。',
    Demo: OffCanvasDemo, hasBeforeAfter: true },
  { id: 'centered-column', nameJa: '中央1カラム', nameEn: 'Centered Column', category: 'layout',
    description: '中央寄せの1カラム構成。読み物コンテンツに集中させたいときに使う。Mediumや note などが代表例。',
    Demo: CenteredColumnDemo, hasBeforeAfter: false },
  { id: 'aspect-ratio-box', nameJa: 'アスペクト比固定', nameEn: 'Aspect Ratio Box', category: 'layout',
    description: '画像や埋め込み動画の縦横比を固定したまま柔軟にリサイズする手法。CSSの aspect-ratio で実装する。',
    Demo: AspectRatioBoxDemo, hasBeforeAfter: false },
  { id: 'sticky-footer', nameJa: 'スティッキーフッター', nameEn: 'Sticky Footer', category: 'layout',
    description: 'コンテンツが短くてもフッターが画面下部に張り付くレイアウト。flex の min-height:100vh + flex-grow で作る。',
    Demo: StickyFooterDemo, hasBeforeAfter: true },
  { id: 'timeline', nameJa: 'タイムライン', nameEn: 'Timeline', category: 'layout',
    description: '縦線とドットで時系列を示すレイアウト。沿革や履歴、リリースノートなどに使う。',
    Demo: TimelineDemo, hasBeforeAfter: false },
  { id: 'pricing-table', nameJa: '料金表', nameEn: 'Pricing Table', category: 'layout',
    description: '複数プランを横並びで比較するテーブル。おすすめプランを少し大きく目立たせる構成が定番。',
    Demo: PricingTableDemo, hasBeforeAfter: false },
  { id: 'comparison-table', nameJa: '比較表', nameEn: 'Comparison Table', category: 'layout',
    description: '機能を○✕で示すマトリクス表。商品やプランの違いを一目で把握させる。',
    Demo: ComparisonTableDemo, hasBeforeAfter: false },
  { id: 'image-mosaic', nameJa: '画像モザイク', nameEn: 'Image Mosaic', category: 'layout',
    description: '大小さまざまな画像タイルを敷き詰めたレイアウト。Instagramのプロフィール画面が代表例。',
    Demo: ImageMosaicDemo, hasBeforeAfter: false },
  { id: 'sticky-sidebar', nameJa: 'スティッキーサイドバー', nameEn: 'Sticky Sidebar', category: 'layout',
    description: 'スクロールに追従して画面内に留まるサイドバー。目次や関連情報を常時見せる用途で使う。',
    Demo: StickySidebarDemo, hasBeforeAfter: false },
  { id: 'scroll-snap', nameJa: 'スクロールスナップ', nameEn: 'Scroll Snap', category: 'layout',
    description: 'スクロールしたときに自動で要素の境界にピタッと止まるレイアウト。CSSの scroll-snap-type で作る。',
    Demo: ScrollSnapDemo, hasBeforeAfter: false },
  { id: 'magazine', nameJa: '雑誌レイアウト', nameEn: 'Magazine Layout', category: 'layout',
    description: '大きな見出し＋複数カラムの本文で組まれた、紙の雑誌風レイアウト。読み物コンテンツに使う。',
    Demo: MagazineDemo, hasBeforeAfter: false },
  { id: 'mega-footer', nameJa: 'メガフッター', nameEn: 'Mega Footer', category: 'layout',
    description: '複数カラムで多くのリンクを整理した大きなフッター。ECサイトやコーポレートサイトで頻出。',
    Demo: MegaFooterDemo, hasBeforeAfter: false },
  { id: 'feature-list', nameJa: '特徴リスト / フィーチャー', nameEn: 'Feature List', category: 'layout',
    description: 'アイコン＋タイトル＋短文を横並びで3〜4個並べる定番セクション。サービスの売りを伝える。',
    Demo: FeatureListDemo, hasBeforeAfter: false },
  { id: 'faq-section', nameJa: 'FAQセクション', nameEn: 'FAQ Section', category: 'layout',
    description: 'よくある質問を縦にリスト化したセクション。クリックで答えが開閉するアコーディオン構成が定番。',
    Demo: FAQSectionDemo, hasBeforeAfter: false },
  { id: 'cta-banner', nameJa: 'CTAバナー', nameEn: 'CTA Banner', category: 'layout',
    description: 'ページ末尾でアクションを促す、目立つ色の横長バナー。コピー＋ボタンの2要素構成。',
    Demo: CTABannerDemo, hasBeforeAfter: false },
  { id: 'stats-row', nameJa: '数字並び / Statsセクション', nameEn: 'Stats Row', category: 'layout',
    description: '大きな数値と小さなラベルを横並びで複数表示するセクション。実績訴求の定番。',
    Demo: StatsRowDemo, hasBeforeAfter: false },
  { id: 'sticky-cta', nameJa: 'スティッキーCTA', nameEn: 'Sticky CTA', category: 'layout',
    description: 'スクロールしても画面下部に張り付き続けるCTAバー。モバイルECで購入導線として頻出。',
    Demo: StickyCTADemo, hasBeforeAfter: false },
  { id: 'app-shell', nameJa: 'アプリシェル', nameEn: 'App Shell', category: 'layout',
    description: 'ヘッダー＋サイドナビ＋本体＋下部ナビで囲んだ、SaaSアプリ典型のレイアウト骨格。',
    Demo: AppShellDemo, hasBeforeAfter: false },
  { id: 'testimonials-wall', nameJa: 'お客様の声ウォール', nameEn: 'Testimonials Wall', category: 'layout',
    description: '顧客レビューをタイル状に敷き詰めて並べるセクション。SaaS LPの定番。',
    Demo: TestimonialsWallDemo, hasBeforeAfter: false },
  { id: 'logo-bar', nameJa: 'ロゴバー / 導入企業ロゴ', nameEn: 'Logo Bar', category: 'layout',
    description: '導入企業や掲載メディアのロゴを水平一列に並べる帯。',
    Demo: LogoBarDemo, hasBeforeAfter: false },
  { id: 'logo-marquee', nameJa: 'ロゴマーキー', nameEn: 'Logo Marquee', category: 'layout',
    description: 'ロゴ群が横方向に無限スクロールで流れる帯。一覧性と動きを両立。',
    Demo: LogoMarqueeDemo, hasBeforeAfter: false },
  { id: 'newsletter-signup', nameJa: 'ニュースレター登録セクション', nameEn: 'Newsletter Signup', category: 'layout',
    description: 'メール入力欄＋ボタンを大きく配したメルマガ登録帯。',
    Demo: NewsletterSignupDemo, hasBeforeAfter: false },
  { id: 'about-section', nameJa: 'アバウトセクション', nameEn: 'About Section', category: 'layout',
    description: 'テキスト＋画像で会社・サービス紹介を行う見開き型ブロック。',
    Demo: AboutSectionDemo, hasBeforeAfter: false },
  { id: 'team-section', nameJa: 'チームセクション', nameEn: 'Team Section', category: 'layout',
    description: 'メンバーの顔写真・肩書きをグリッドで並べる紹介セクション。',
    Demo: TeamSectionDemo, hasBeforeAfter: false },
  { id: 'process-steps', nameJa: 'プロセスステップ', nameEn: 'Process Steps', category: 'layout',
    description: '「STEP 01〜04」と進行を示す手順説明セクション。',
    Demo: ProcessStepsDemo, hasBeforeAfter: false },
  { id: 'roadmap-section', nameJa: 'ロードマップセクション', nameEn: 'Roadmap', category: 'layout',
    description: '時系列でフェーズを示す未来計画ブロック。プロダクトの計画公開で使う。',
    Demo: RoadmapSectionDemo, hasBeforeAfter: false },
  { id: 'auto-fit-grid', nameJa: 'オートフィットグリッド', nameEn: 'Auto-fit Grid', category: 'layout',
    description: 'repeat(auto-fit, minmax())で列数が画面幅に応じて自動調整されるグリッド。',
    Demo: AutoFitGridDemo, hasBeforeAfter: false },
  { id: 'subgrid', nameJa: 'サブグリッド', nameEn: 'Subgrid', category: 'layout',
    description: '親グリッドのトラックを子に継承し、見出し行を子要素間で揃える機能。',
    Demo: SubgridLayoutDemo, hasBeforeAfter: true },
  { id: 'container-query-layout', nameJa: 'コンテナクエリレイアウト', nameEn: 'Container Query Layout', category: 'layout',
    description: '親要素の幅に応じて子の配置が切り替わるレイアウト（@container）。',
    Demo: ContainerQueryLayoutDemo, hasBeforeAfter: true },
  { id: 'intrinsic-grid', nameJa: 'イントリンシックグリッド', nameEn: 'Intrinsic Grid', category: 'layout',
    description: 'min-content/max-contentで内容物起点に列幅を決めるグリッド。',
    Demo: IntrinsicGridDemo, hasBeforeAfter: false },
  { id: 'quilt-layout', nameJa: 'キルトレイアウト', nameEn: 'Quilt Layout', category: 'layout',
    description: '大小の矩形を不規則に組み合わせるパッチワーク型配置。',
    Demo: QuiltLayoutDemo, hasBeforeAfter: false },
  { id: 'broken-grid', nameJa: 'ブロークングリッド', nameEn: 'Broken Grid', category: 'layout',
    description: '通常グリッドを意図的にずらしてリズムを生むデザイン。',
    Demo: BrokenGridDemo, hasBeforeAfter: false },
  { id: 'anti-grid', nameJa: 'アンチグリッド', nameEn: 'Anti-Grid', category: 'layout',
    description: '整列を放棄した有機的・自由配置のレイアウト。',
    Demo: AntiGridDemo, hasBeforeAfter: false },
  { id: 'mobile-tab-bar', nameJa: 'モバイルタブバー', nameEn: 'Mobile Tab Bar', category: 'layout',
    description: '画面下部固定のアイコン式メイン導線。スマホアプリ標準。',
    Demo: MobileTabBarDemo, hasBeforeAfter: false },
  { id: 'pill-nav', nameJa: 'ピルナビ', nameEn: 'Pill Nav', category: 'layout',
    description: '丸角の薬カプセル状ナビ、選択中だけ塗るスタイル。',
    Demo: PillNavDemo, hasBeforeAfter: false },
  { id: 'anchor-nav', nameJa: 'アンカーナビ / 目次', nameEn: 'Anchor Nav', category: 'layout',
    description: 'ページ内セクションへ飛ぶ目次型ナビ。長文記事の右側に配置。',
    Demo: AnchorNavDemo, hasBeforeAfter: false },
  { id: 'floating-action-bar', nameJa: 'フローティングアクションバー', nameEn: 'Floating Action Bar', category: 'layout',
    description: '画面下に浮く操作ボタンの集合。複数選択時のアクション群に使う。',
    Demo: FloatingActionBarDemo, hasBeforeAfter: false },
  { id: 'story-bar', nameJa: 'ストーリーバー', nameEn: 'Story Bar', category: 'layout',
    description: '画面上部に円形サムネを横スクロールで並べる導線（Instagramのストーリーズ風）。',
    Demo: StoryBarDemo, hasBeforeAfter: false },
  { id: 'widget-grid-dashboard', nameJa: 'ウィジェットグリッドダッシュボード', nameEn: 'Widget Grid Dashboard', category: 'layout',
    description: '自由配置可能なカード型ウィジェットの集合。BI/分析ダッシュボードで頻出。',
    Demo: WidgetGridDashboardDemo, hasBeforeAfter: false },
  { id: 'filter-sidebar', nameJa: 'フィルターサイドバー', nameEn: 'Filter Sidebar', category: 'layout',
    description: '左/右に固定された絞り込み条件パネル。ECや検索結果ページで頻出。',
    Demo: FilterSidebarDemo, hasBeforeAfter: false },
  { id: 'toolbar-layout', nameJa: 'ツールバーレイアウト', nameEn: 'Toolbar Layout', category: 'layout',
    description: '操作ボタンが横並びになる工具帯。エディタや管理画面で使う。',
    Demo: ToolbarLayoutDemo, hasBeforeAfter: false },
  { id: 'list-detail', nameJa: 'リスト詳細', nameEn: 'List-Detail', category: 'layout',
    description: '左にリスト・右に詳細を並べる二画面構成。メーラーや管理画面の定番。',
    Demo: ListDetailDemo, hasBeforeAfter: false },
  { id: 'three-pane', nameJa: '三ペインレイアウト', nameEn: 'Three-Pane Layout', category: 'layout',
    description: 'フォルダ・リスト・詳細の三分割（メーラー型）。',
    Demo: ThreePaneDemo, hasBeforeAfter: false },
  { id: 'inbox-layout', nameJa: 'インボックスレイアウト', nameEn: 'Inbox Layout', category: 'layout',
    description: '件名行が縦に積まれるメッセージ一覧型。メール・チャット一覧で使う。',
    Demo: InboxLayoutDemo, hasBeforeAfter: false },
  { id: 'calendar-grid', nameJa: 'カレンダーグリッド', nameEn: 'Calendar Grid', category: 'layout',
    description: '7×Nの日付格子型レイアウト。月間カレンダー表示の定番。',
    Demo: CalendarGridDemo, hasBeforeAfter: false },
  { id: 'detail-page-hero', nameJa: '詳細ページヒーロー', nameEn: 'Detail Page Hero', category: 'layout',
    description: '商品/記事詳細ページ上部の画像＋メタ大型エリア。ECの商品ページで頻出。',
    Demo: DetailPageHeroDemo, hasBeforeAfter: false },
  { id: 'coverflow', nameJa: 'カバーフロー', nameEn: 'Coverflow', category: 'layout',
    description: '中央カードが大、両端が縮小・傾斜する立体カルーセル。',
    Demo: CoverflowLayoutDemo, hasBeforeAfter: false },
  { id: 'scrollytelling', nameJa: 'スクロリテリングレイアウト', nameEn: 'Scrollytelling', category: 'layout',
    description: 'スクロールに連動して左がピン留め右が進行するレイアウト。物語的なLPで使う。',
    Demo: ScrollytellingLayoutDemo, hasBeforeAfter: false },
  { id: 'boxed-layout', nameJa: 'ボックスレイアウト', nameEn: 'Boxed Layout', category: 'layout',
    description: '中央に最大幅を持つ箱型コンテナ。読みやすさ重視のサイトで使う。',
    Demo: BoxedLayoutDemo, hasBeforeAfter: true },
  { id: 'framed-layout', nameJa: 'フレームドレイアウト', nameEn: 'Framed Layout', category: 'layout',
    description: '画面四辺に余白＋枠線で「絵画」のように囲うレイアウト。ブランドサイトで使う。',
    Demo: FramedLayoutDemo, hasBeforeAfter: false },
  { id: 'overlap-layout', nameJa: 'オーバーラップレイアウト', nameEn: 'Overlap Layout', category: 'layout',
    description: '隣り合う要素を意図的に重ねる構図。動きと洗練を演出。',
    Demo: OverlapLayoutDemo, hasBeforeAfter: false },
  { id: 'stacked-cards', nameJa: 'スタックドカード', nameEn: 'Stacked Cards', category: 'layout',
    description: '後ろに重なるカードが見えるzレイヤー表現。商品やオプションの提示で使う。',
    Demo: StackedCardsDemo, hasBeforeAfter: false },
  { id: 'split-hero', nameJa: 'スプリットヒーロー', nameEn: 'Split Hero', category: 'layout',
    description: 'ヒーローを左テキスト/右ビジュアルに二分割した構成。',
    Demo: SplitHeroDemo, hasBeforeAfter: false },
  { id: 'quote-section', nameJa: 'クォートセクション', nameEn: 'Quote Section', category: 'layout',
    description: '大きな引用符と短い文だけで構成するセクション。創業者の言葉などに使う。',
    Demo: QuoteSectionDemo, hasBeforeAfter: false },
  { id: 'press-coverage', nameJa: 'プレスカバレッジ', nameEn: 'Press Coverage', category: 'layout',
    description: 'メディア掲載実績の引用＋ロゴを並べる帯。',
    Demo: PressCoverageDemo, hasBeforeAfter: false },
  { id: 'pricing-tier-cards', nameJa: 'プライシングティアカード', nameEn: 'Pricing Tier Cards', category: 'layout',
    description: '3〜4プランを横並びカードで対比する区画。中央を強調する構成が定番。',
    Demo: PricingTierCardsDemo, hasBeforeAfter: false },
  { id: 'comparison-slider', nameJa: '比較スライダー', nameEn: 'Comparison Slider', category: 'layout',
    description: '画像を中央バーで左右に切り分けるBefore/After比較UI。',
    Demo: ComparisonSliderDemo, hasBeforeAfter: true },
  { id: 'diagonal-split', nameJa: '斜め分割', nameEn: 'Diagonal Split', category: 'layout',
    description: '斜め線で画面を二分する構図。動きと印象の強さを両立。',
    Demo: DiagonalSplitDemo, hasBeforeAfter: false },

  // ===== タイポ&カラー =====
  { id: 'kerning', nameJa: 'カーニング', nameEn: 'Kerning', category: 'font',
    description: '文字と文字の間隔を個別に調整すること。詰めすぎると窮屈、空けすぎると間延び。見出しの仕上げで重要。',
    Demo: KerningDemo, hasBeforeAfter: true },
  { id: 'line-height', nameJa: '行間 / 行送り', nameEn: 'Line Height', category: 'font',
    description: '行の高さの設定。狭いと読みにくく、広いと散漫になる。本文は 1.6〜1.8 倍程度が標準。',
    Demo: LineHeightDemo, hasBeforeAfter: true },
  { id: 'drop-cap', nameJa: 'ドロップキャップ', nameEn: 'Drop Cap', category: 'font',
    description: '段落の先頭文字を大きく数行分の高さで表示する装飾。雑誌や読み物デザインで使われる。',
    Demo: DropCapDemo, hasBeforeAfter: true },
  { id: 'gradient', nameJa: 'グラデーション', nameEn: 'Gradient', category: 'typography',
    description: '2色以上を段階的に変化させる塗り。線形（Linear）と円形（Radial）が代表的。背景や文字色に使う。',
    Demo: GradientDemo, hasBeforeAfter: false },
  { id: 'glassmorphism', nameJa: 'グラスモーフィズム', nameEn: 'Glassmorphism', category: 'typography',
    description: '半透明＋ブラーで磨りガラス風に見せる装飾。背景が透けて見える奥行きと、エッジの白いハイライトが特徴。',
    Demo: GlassmorphismDemo, hasBeforeAfter: true },
  { id: 'neumorphism', nameJa: 'ニューモーフィズム', nameEn: 'Neumorphism', category: 'typography',
    description: '同色の背景から押し出されたような柔らかい凹凸の擬似立体表現。明暗2つの影で凹凸を表現する。',
    Demo: NeumorphismDemo, hasBeforeAfter: true },
  { id: 'duotone', nameJa: 'デュオトーン', nameEn: 'Duotone', category: 'typography',
    description: '画像を2色のグラデーションで塗り直す加工。統一感のある画像ライブラリを作るときによく使われる。',
    Demo: DuotoneDemo, hasBeforeAfter: true },
  { id: 'mesh-gradient', nameJa: 'メッシュグラデーション', nameEn: 'Mesh Gradient', category: 'typography',
    description: '複数色を網目状に滑らかに混ぜたグラデーション。最近のヒーロー背景で頻出する有機的な雰囲気。',
    Demo: MeshGradientDemo, hasBeforeAfter: false },
  { id: 'outline-text', nameJa: '袋文字 / アウトラインテキスト', nameEn: 'Outline Text', category: 'font',
    description: '文字の中身を抜き、輪郭の線だけで見せる装飾。ポスターや見出しで強い存在感を出す。',
    Demo: OutlineTextDemo, hasBeforeAfter: true },
  { id: 'text-shadow', nameJa: 'テキストシャドウ', nameEn: 'Text Shadow', category: 'font',
    description: '文字に影を重ねて立体感や視認性を出す。ぼかし影と硬い段付き影でかなり印象が変わる。',
    Demo: TextShadowDemo, hasBeforeAfter: true },
  { id: 'vertical-text', nameJa: '縦書き', nameEn: 'Vertical Text', category: 'font',
    description: '日本語や中国語の縦書きレイアウト。CSSでは writing-mode で実現する。和風サイトや見出しで使う。',
    Demo: VerticalTextDemo, hasBeforeAfter: true },
  { id: 'monochrome', nameJa: 'モノクロ / グレースケール', nameEn: 'Monochrome', category: 'typography',
    description: '画像や要素を彩度ゼロのモノクロに統一する手法。ノスタルジーや格式を出したいときに使う。',
    Demo: MonochromeDemo, hasBeforeAfter: true },
  { id: 'complementary', nameJa: '補色', nameEn: 'Complementary Colors', category: 'typography',
    description: '色相環で正反対に位置する2色の組み合わせ（紫⇔黄、青⇔橙など）。コントラストが強く、強調や対比に効く。',
    Demo: ComplementaryDemo, hasBeforeAfter: false },
  { id: 'brutalism', nameJa: 'ブルータリズム', nameEn: 'Brutalism', category: 'typography',
    description: '原色・太い枠線・段付き影など、装飾を排した荒々しいデザインスタイル。あえて整えない美学。',
    Demo: BrutalismDemo, hasBeforeAfter: false },
  { id: 'gradient-text', nameJa: 'グラデーションテキスト', nameEn: 'Gradient Text', category: 'font',
    description: '文字色にグラデーションを適用した表現。CSSの background-clip:text で実装する。見出し映え狙いで多用される。',
    Demo: GradientTextDemo, hasBeforeAfter: true },
  { id: 'variable-font', nameJa: 'バリアブルフォント', nameEn: 'Variable Font', category: 'font',
    description: '1つのフォントファイルでウェイトや太さが連続的に変えられるフォント。アニメーションで太らせる演出に使える。',
    Demo: VariableFontDemo, hasBeforeAfter: false },
  { id: 'highlight', nameJa: 'ハイライト / 蛍光マーカー', nameEn: 'Highlight', category: 'font',
    description: '文字の下半分だけを蛍光色で塗ったマーカー風の強調。本文の中で重要な単語を目立たせるのに使う。',
    Demo: HighlightDemo, hasBeforeAfter: true },
  { id: 'hanging-punctuation', nameJa: 'ぶら下げ組み', nameEn: 'Hanging Punctuation', category: 'font',
    description: '行頭・行末の句読点や括弧を文字ブロックの外にはみ出させる組版テクニック。読み手の視線を整える。',
    Demo: HangingPunctuationDemo, hasBeforeAfter: true },
  { id: 'small-caps', nameJa: 'スモールキャップス', nameEn: 'Small Caps', category: 'font',
    description: '小文字を、大文字の形を保ったまま小さくした表現。欧文の見出しや略語表示で品よく見せる。',
    Demo: SmallCapsDemo, hasBeforeAfter: true },
  { id: 'dark-mode', nameJa: 'ダークモード', nameEn: 'Dark Mode', category: 'typography',
    description: '背景を黒系・文字を明るい色にしたカラースキーム。目に優しく、有機ELだと省電力にもなる。',
    Demo: DarkModeDemo, hasBeforeAfter: true },
  { id: 'noise', nameJa: 'ノイズ / グレイン', nameEn: 'Noise / Grain', category: 'typography',
    description: '画面全体に微細なノイズを乗せる質感処理。デジタル臭さを抑えて、紙やフィルムのような温度感を出す。',
    Demo: NoiseDemo, hasBeforeAfter: true },
  { id: 'animated-gradient', nameJa: 'アニメーショングラデーション', nameEn: 'Animated Gradient', category: 'typography',
    description: '色の位置がゆっくり動き続けるグラデーション背景。サイト全体に静かな躍動感を与える。',
    Demo: AnimatedGradientDemo, hasBeforeAfter: false },
  { id: 'pull-quote', nameJa: 'プルクオート', nameEn: 'Pull Quote', category: 'font',
    description: '本文の重要な一文を抜き出して大きく装飾する組版手法。雑誌的なリズムを生む。',
    Demo: PullQuoteDemo, hasBeforeAfter: false },
  { id: 'triadic', nameJa: 'トライアド配色 / 三色配色', nameEn: 'Triadic', category: 'typography',
    description: '色相環を120°ずつ等間隔で3色選ぶ配色。明るくバランスが取れたカラフルな印象になる。',
    Demo: TriadicDemo, hasBeforeAfter: false },
  { id: 'analogous', nameJa: '類似色 / アナロガス', nameEn: 'Analogous', category: 'typography',
    description: '色相環で隣り合った色を組み合わせる配色。落ち着いて統一感が出る。自然界の色合いに近い。',
    Demo: AnalogousDemo, hasBeforeAfter: false },
  { id: 'tabular-numerals', nameJa: 'タビュラ数字 / 等幅数字', nameEn: 'Tabular Numerals', category: 'font',
    description: '数字の幅を全て同じに揃える組版オプション。表や金額表示で桁が縦に揃って読みやすくなる。',
    Demo: TabularNumeralsDemo, hasBeforeAfter: true },
  { id: 'ligature', nameJa: 'リガチャ / 合字', nameEn: 'Ligature', category: 'font',
    description: '"fi" や "fl" のように、隣り合う文字をひとつの字形に合体させる組版テクニック。',
    Demo: LigatureDemo, hasBeforeAfter: true },
  { id: 'letter-spacing', nameJa: 'レタースペーシング / トラッキング', nameEn: 'Letter Spacing', category: 'font',
    description: '文字全体の間隔を均等に空ける指定。大文字の見出しを広めに空けると上品な印象になる。',
    Demo: LetterSpacingDemo, hasBeforeAfter: true },
  { id: 'color-swatch', nameJa: 'カラースウォッチ', nameEn: 'Color Swatch', category: 'typography',
    description: 'デザインシステムの色見本。1色から濃淡の段階を作って体系化する（500/400/300のような番号付け）。',
    Demo: ColorSwatchDemo, hasBeforeAfter: false },
  { id: 'monochromatic', nameJa: 'モノクロマティック / 単色配色', nameEn: 'Monochromatic', category: 'typography',
    description: '1つの色相だけで明度・彩度を変えて構成する配色。落ち着いた洗練された印象が出る。',
    Demo: MonochromaticDemo, hasBeforeAfter: false },
  { id: 'pastel', nameJa: 'パステル配色', nameEn: 'Pastel Palette', category: 'typography',
    description: '彩度を抑えた淡くやわらかい色たち。優しさ・可愛さ・春らしさを出したい配色に使う。',
    Demo: PastelDemo, hasBeforeAfter: false },
  { id: 'earth-tone', nameJa: 'アースカラー', nameEn: 'Earth Tone', category: 'typography',
    description: '土・木・砂を思わせるブラウン系の自然な色合い。ナチュラル・オーガニック路線のサイトで頻出。',
    Demo: EarthToneDemo, hasBeforeAfter: false },
  { id: 'iridescent', nameJa: 'イリディセント / 虹色', nameEn: 'Iridescent', category: 'typography',
    description: 'CDの裏面のような虹色のグラデーション。未来的・宇宙的なブランド表現に使う。',
    Demo: IridescentDemo, hasBeforeAfter: false },
  { id: 'neon', nameJa: 'ネオン', nameEn: 'Neon', category: 'typography',
    description: '蛍光色＋強い発光感で電飾看板を再現したスタイル。ダーク背景と組み合わせて使う。',
    Demo: NeonDemo, hasBeforeAfter: false },
  { id: 'vertical-rhythm', nameJa: 'バーティカルリズム', nameEn: 'Vertical Rhythm', category: 'font',
    description: '行間・余白を共通の単位（ベースライン）に揃えて、縦方向のリズムを作る組版手法。',
    Demo: VerticalRhythmDemo, hasBeforeAfter: true },
  { id: 'drop-shadow', nameJa: 'ドロップシャドウ', nameEn: 'Drop Shadow', category: 'typography',
    description: '要素の下に影を落として浮き上がらせる装飾。ぼかしの強さで浮遊感の高さを表現する。',
    Demo: DropShadowDemo, hasBeforeAfter: true },
  { id: 'all-caps', nameJa: '全大文字 / オールキャップス', nameEn: 'All Caps', category: 'font',
    description: '見出しを全て大文字にして、レタースペーシングを広めにとる組版テクニック。格調を出せる。',
    Demo: AllCapsDemo, hasBeforeAfter: true },
  { id: 'monospace', nameJa: '等幅フォント / モノスペース', nameEn: 'Monospace', category: 'font',
    description: '全ての文字が同じ幅のフォント。コード表示やターミナル表現で使う。',
    Demo: MonospaceDemo, hasBeforeAfter: false },
  { id: 'color-contrast', nameJa: 'カラーコントラスト', nameEn: 'Color Contrast', category: 'typography',
    description: '文字色と背景色の明度差。WCAGでは本文 4.5:1 以上が推奨される（AA基準）。アクセシビリティの肝。',
    Demo: ColorContrastDemo, hasBeforeAfter: true },
  { id: 'spacing-scale', nameJa: '余白スケール', nameEn: 'Spacing Scale', category: 'typography',
    description: '4/8/16/24/32...など倍数で揃えた余白の体系。デザインシステムの基礎となる。',
    Demo: SpacingScaleDemo, hasBeforeAfter: false },
  { id: 'baseline', nameJa: 'ベースライン', nameEn: 'Baseline', category: 'font',
    description: '文字が乗る基準線。ディセンダーはこの線より下に伸びる。',
    Demo: BaselineDemo, hasBeforeAfter: false },
  { id: 'x-height', nameJa: 'エックスハイト', nameEn: 'X-height', category: 'font',
    description: '小文字「x」の高さ。本文の読みやすさを左右する重要な寸法。',
    Demo: XHeightDemo, hasBeforeAfter: false },
  { id: 'ascender', nameJa: 'アセンダー', nameEn: 'Ascender', category: 'font',
    description: '小文字でx-heightより上に伸びる部分（b, d, h, k等）。',
    Demo: AscenderDemo, hasBeforeAfter: false },
  { id: 'descender', nameJa: 'ディセンダー', nameEn: 'Descender', category: 'font',
    description: '小文字でベースラインより下に伸びる部分（g, j, p, q, y）。',
    Demo: DescenderDemo, hasBeforeAfter: false },
  { id: 'cap-height', nameJa: 'キャップハイト', nameEn: 'Cap Height', category: 'font',
    description: '大文字の高さ。ベースラインから大文字上端までの距離。',
    Demo: CapHeightDemo, hasBeforeAfter: false },
  { id: 'counter', nameJa: 'カウンター', nameEn: 'Counter', category: 'font',
    description: '文字内部の閉じた/半閉じの空白部分（O, a, eの内側など）。',
    Demo: CounterDemo, hasBeforeAfter: false },
  { id: 'optical-size', nameJa: 'オプティカルサイズ', nameEn: 'Optical Size', category: 'font',
    description: 'サイズに応じて字形を最適化する可変フォントの軸。小サイズと大サイズで字形が変わる。',
    Demo: OpticalSizeDemo, hasBeforeAfter: true },
  { id: 'justification', nameJa: '両端揃え', nameEn: 'Justification', category: 'font',
    description: '行の左右両端を揃え、語間で調整する組版。',
    Demo: JustificationDemo, hasBeforeAfter: true },
  { id: 'widow-orphan', nameJa: 'ウィドウ / オーファン', nameEn: 'Widow / Orphan', category: 'font',
    description: '段落末尾が次ページ冒頭に1行だけ残る（ウィドウ）、段落冒頭1行がページ末尾に取り残される（オーファン）組版欠点。',
    Demo: WidowOrphanDemo, hasBeforeAfter: true },
  { id: 'leading', nameJa: 'レディング / 行送り', nameEn: 'Leading', category: 'font',
    description: 'ベースライン間の距離。Line Heightと近いが活版印刷由来の用語。',
    Demo: LeadingDemo, hasBeforeAfter: true },
  { id: 'stroke-contrast', nameJa: 'ストロークコントラスト', nameEn: 'Stroke Contrast', category: 'font',
    description: '文字の太い線と細い線の太さ差。書体の個性を決める要素。',
    Demo: StrokeContrastDemo, hasBeforeAfter: true },
  { id: 'serif', nameJa: 'セリフ体', nameEn: 'Serif', category: 'font',
    description: '文字の端に「うろこ」を持つ伝統的書体（Times, Garamond等）。',
    Demo: SerifDemo, hasBeforeAfter: false },
  { id: 'sans-serif', nameJa: 'サンセリフ体', nameEn: 'Sans-serif', category: 'font',
    description: 'うろこを持たない近代的書体（Helvetica, Arial等）。',
    Demo: SansSerifDemo, hasBeforeAfter: false },
  { id: 'slab-serif', nameJa: 'スラブセリフ', nameEn: 'Slab Serif', category: 'font',
    description: '角張った太いセリフを持つ書体（Rockwell, Roboto Slab）。',
    Demo: SlabSerifDemo, hasBeforeAfter: false },
  { id: 'display-font', nameJa: 'ディスプレイフォント', nameEn: 'Display Font', category: 'font',
    description: '見出し・大サイズ専用に設計された装飾性の高い書体。',
    Demo: DisplayFontDemo, hasBeforeAfter: false },
  { id: 'handwritten', nameJa: '手書き体 / スクリプト体', nameEn: 'Handwritten / Script', category: 'font',
    description: '筆記体や手書き風の書体。カジュアル・パーソナルな印象を出す。',
    Demo: HandwrittenDemo, hasBeforeAfter: false },
  { id: 'pixel-font', nameJa: 'ピクセル / ビットマップフォント', nameEn: 'Pixel Font', category: 'font',
    description: '低解像度のドット絵的書体。レトロゲーム風表現に使う。',
    Demo: PixelFontDemo, hasBeforeAfter: false },
  { id: 'blackletter', nameJa: 'ブラックレター', nameEn: 'Blackletter', category: 'font',
    description: '中世写本由来のゴシック体（Fraktur等）。新聞名や紋章に使われる。',
    Demo: BlackletterDemo, hasBeforeAfter: false },
  { id: 'mincho', nameJa: '明朝体', nameEn: 'Mincho', category: 'font',
    description: '縦線が太く横線が細い、うろこを持つ和文書体。本文や格式表現に。',
    Demo: MinchoDemo, hasBeforeAfter: false },
  { id: 'jp-gothic', nameJa: 'ゴシック体（和文）', nameEn: 'Japanese Gothic', category: 'font',
    description: '線幅が均一な和文サンセリフ系書体。WEB・モダンな印象に。',
    Demo: JpGothicDemo, hasBeforeAfter: false },
  { id: 'split-complementary', nameJa: 'スプリットコンプリメンタリー', nameEn: 'Split-Complementary', category: 'typography',
    description: '基準色と、その補色の両隣2色を使う3色配色。バランスが取りやすい。',
    Demo: SplitComplementaryDemo, hasBeforeAfter: false },
  { id: 'tetradic', nameJa: 'テトラディック / 矩形配色', nameEn: 'Tetradic', category: 'typography',
    description: '補色2組を使う4色配色。豊富な色合いだがバランス調整が難しい。',
    Demo: TetradicDemo, hasBeforeAfter: false },
  { id: 'rule-60-30-10', nameJa: '60-30-10の法則', nameEn: '60-30-10 Rule', category: 'typography',
    description: 'メイン60%・サブ30%・アクセント10%で配色を構成する経験則。',
    Demo: Rule603010Demo, hasBeforeAfter: false },
  { id: 'tints', nameJa: 'ティント', nameEn: 'Tints', category: 'typography',
    description: 'ある色に白を加えて明るくしたバリエーション。',
    Demo: TintsDemo, hasBeforeAfter: true },
  { id: 'shades', nameJa: 'シェード', nameEn: 'Shades', category: 'typography',
    description: 'ある色に黒を加えて暗くしたバリエーション。',
    Demo: ShadesDemo, hasBeforeAfter: true },
  { id: 'tones', nameJa: 'トーン', nameEn: 'Tones', category: 'typography',
    description: 'ある色にグレーを加えて彩度を落としたバリエーション。',
    Demo: TonesDemo, hasBeforeAfter: true },
  { id: 'semantic-color', nameJa: 'セマンティックカラー', nameEn: 'Semantic Color', category: 'typography',
    description: 'success/warning/error/info等、意味に紐づくUI色設計。デザインシステム必須。',
    Demo: SemanticColorDemo, hasBeforeAfter: false },
  { id: 'hsl', nameJa: 'HSL色空間', nameEn: 'HSL', category: 'typography',
    description: '色相(Hue)・彩度(Saturation)・明度(Lightness)で色を扱う色モデル。',
    Demo: HslDemo, hasBeforeAfter: false },
  { id: 'oklch', nameJa: 'OKLCH色空間', nameEn: 'OKLCH', category: 'typography',
    description: '知覚的に均等な色差を実現する近代的な色空間。CSS Color 4でサポート。',
    Demo: OklchDemo, hasBeforeAfter: false },
  { id: 'skeuomorphism', nameJa: 'スキューモーフィズム', nameEn: 'Skeuomorphism', category: 'typography',
    description: '現実素材（皮革・木目・紙）を模した立体的UIスタイル。初期iOSが代表例。',
    Demo: SkeuomorphismDemo, hasBeforeAfter: false },
  { id: 'flat-design', nameJa: 'フラットデザイン', nameEn: 'Flat Design', category: 'typography',
    description: '影や立体感を排し、平面的な図形と色面で構成するスタイル。',
    Demo: FlatDesignDemo, hasBeforeAfter: false },
  { id: 'material-design', nameJa: 'マテリアルデザイン', nameEn: 'Material Design', category: 'typography',
    description: 'Googleが提唱した紙とインクの物理メタファに基づくUI体系。',
    Demo: MaterialDesignDemo, hasBeforeAfter: false },
  { id: 'memphis', nameJa: 'メンフィスデザイン', nameEn: 'Memphis Design', category: 'typography',
    description: '80年代の派手な色・幾何模様・ジグザグ装飾のポストモダン様式。',
    Demo: MemphisDemo, hasBeforeAfter: false },
  { id: 'vaporwave', nameJa: 'ヴェイパーウェイブ', nameEn: 'Vaporwave', category: 'typography',
    description: '80-90年代風グリッド・ピンク／シアン・ギリシャ彫刻を多用するスタイル。',
    Demo: VaporwaveDemo, hasBeforeAfter: false },
  { id: 'y2k', nameJa: 'Y2Kスタイル', nameEn: 'Y2K', category: 'typography',
    description: '90年代末〜2000年代初頭のクローム・バブル・テック装飾を再解釈したスタイル。',
    Demo: Y2KDemo, hasBeforeAfter: false },
  { id: 'maximalism', nameJa: 'マキシマリズム', nameEn: 'Maximalism', category: 'typography',
    description: '色・パターン・要素を意図的に過剰に詰め込むスタイル。ミニマリズムの対極。',
    Demo: MaximalismDemo, hasBeforeAfter: false },
  { id: 'claymorphism', nameJa: 'クレイモーフィズム', nameEn: 'Claymorphism', category: 'typography',
    description: '粘土細工のような柔らかい立体感とパステル色を組み合わせたUIスタイル。',
    Demo: ClaymorphismDemo, hasBeforeAfter: false },
  { id: 'inner-shadow', nameJa: 'インナーシャドウ', nameEn: 'Inner Shadow', category: 'typography',
    description: '要素の内側に落ちる影。へこみや彫り込みの表現に使用。',
    Demo: InnerShadowDemo, hasBeforeAfter: true },
  { id: 'risograph', nameJa: 'リソグラフ', nameEn: 'Risograph', category: 'typography',
    description: '孔版印刷特有の版ずれ・粒状・限定色を再現したスタイル。',
    Demo: RisographDemo, hasBeforeAfter: false },
  { id: 'halftone', nameJa: 'ハーフトーン', nameEn: 'Halftone', category: 'typography',
    description: '大小の網点で濃淡を表現する印刷由来のテクスチャ。レトロ・ポップな表現。',
    Demo: HalftoneDemo, hasBeforeAfter: true },

  // ===== UIパーツ =====
  { id: 'toast', nameJa: 'トースト', nameEn: 'Toast', category: 'component',
    description: '画面端に一時的に現れて自動で消える通知。保存完了やエラーなど、邪魔せず伝えたいメッセージに使う。',
    Demo: ToastDemo, hasBeforeAfter: false },
  { id: 'tooltip', nameJa: 'ツールチップ', nameEn: 'Tooltip', category: 'component',
    description: 'ホバーやフォーカスで表示される、小さな説明用の吹き出し。アイコンボタンの意味補足などに使う。',
    Demo: TooltipDemo, hasBeforeAfter: false },
  { id: 'accordion', nameJa: 'アコーディオン', nameEn: 'Accordion', category: 'component',
    description: 'クリックで開閉する折りたたみパネル。FAQや設定セクションなど、項目を整理して見せたいときに使う。',
    Demo: AccordionDemo, hasBeforeAfter: false },
  { id: 'badge', nameJa: 'バッジ', nameEn: 'Badge', category: 'component',
    description: 'アイコンの右上などに付ける小さな印。未読件数や通知数を示すための数字表示で頻出。',
    Demo: BadgeDemo, hasBeforeAfter: false },
  { id: 'chip', nameJa: 'チップ / タグ', nameEn: 'Chip', category: 'component',
    description: 'タグ型の小さな表示要素。カテゴリ表示やフィルタ選択肢として横並びで使う。削除可能なものもある。',
    Demo: ChipDemo, hasBeforeAfter: false },
  { id: 'breadcrumb', nameJa: 'パンくずリスト', nameEn: 'Breadcrumb', category: 'component',
    description: '現在のページの階層を示すナビゲーション。「ホーム > カテゴリ > 詳細」のように区切り記号で繋ぐ。',
    Demo: BreadcrumbDemo, hasBeforeAfter: false },
  { id: 'fab', nameJa: 'FAB', nameEn: 'Floating Action Button', category: 'component',
    description: '画面右下などに浮かぶ円形ボタン。主要なアクション（投稿、新規作成など）への素早い導線として使う。',
    Demo: FabDemo, hasBeforeAfter: false },
  { id: 'modal', nameJa: 'モーダル / ダイアログ', nameEn: 'Modal', category: 'component',
    description: '背景を暗くして上に浮かぶ確認・入力用のウィンドウ。閉じるまで他の操作をブロックする。',
    Demo: ModalDemo, hasBeforeAfter: false },
  { id: 'snackbar', nameJa: 'スナックバー', nameEn: 'Snackbar', category: 'component',
    description: '画面下中央に出る、アクションリンク付きの通知バー。「元に戻す」など軽い操作を伴う通知に使う。',
    Demo: SnackbarDemo, hasBeforeAfter: false },
  { id: 'progress-bar', nameJa: 'プログレスバー', nameEn: 'Progress Bar', category: 'component',
    description: '進捗を横棒で示すバー。値が確定する Determinate と、終わりが見えない Indeterminate の2種がある。',
    Demo: ProgressBarDemo, hasBeforeAfter: false },
  { id: 'spinner', nameJa: 'スピナー / ローディングドット', nameEn: 'Spinner', category: 'component',
    description: '点や円が動き続けるローディング表示。処理時間が読めない場面で使う。',
    Demo: SpinnerDemo, hasBeforeAfter: false },
  { id: 'switch', nameJa: 'スイッチ / トグル', nameEn: 'Switch', category: 'component',
    description: 'オン/オフを切り替えるスイッチ。設定画面で頻出。即時反映の操作に使う（保存ボタン不要）。',
    Demo: SwitchDemo, hasBeforeAfter: false },
  { id: 'slider', nameJa: 'スライダー / レンジ', nameEn: 'Slider', category: 'component',
    description: 'つまみをドラッグして値を選ぶ入力UI。音量・明るさ・価格レンジなど連続値の選択に使う。',
    Demo: SliderDemo, hasBeforeAfter: false },
  { id: 'avatar', nameJa: 'アバター', nameEn: 'Avatar', category: 'component',
    description: 'ユーザーを表す円形画像。複数人を重ねて表示する「Avatar Group」もよく使われる。',
    Demo: AvatarDemo, hasBeforeAfter: false },
  { id: 'stepper', nameJa: 'ステッパー', nameEn: 'Stepper', category: 'component',
    description: '複数ステップの進捗を、円と直線で横並びに示すUI。フォームのウィザードや購入フローで使う。',
    Demo: StepperDemo, hasBeforeAfter: false },
  { id: 'carousel', nameJa: 'カルーセル', nameEn: 'Carousel', category: 'component',
    description: '横スライドで複数枚を順に見せるUI。下部のドットインジケータで現在位置を示すのが定番。',
    Demo: CarouselDemo, hasBeforeAfter: false },
  { id: 'empty-state', nameJa: '空状態', nameEn: 'Empty State', category: 'component',
    description: 'まだデータが何もないときに見せる画面。アイコン＋短文＋次のアクションボタンで構成するのが定石。',
    Demo: EmptyStateDemo, hasBeforeAfter: false },
  { id: 'segmented-control', nameJa: 'セグメンテッドコントロール', nameEn: 'Segmented Control', category: 'component',
    description: 'タブに似た、排他的な選択肢を横並びで切り替えるUI。期間切替（Day/Week/Month）などで使う。',
    Demo: SegmentedControlDemo, hasBeforeAfter: false },
  { id: 'dropdown', nameJa: 'ドロップダウン', nameEn: 'Dropdown', category: 'component',
    description: 'クリックで下に開く選択リスト。並び替えやフィルタ選択など、限られた候補から選ぶ場面で使う。',
    Demo: DropdownDemo, hasBeforeAfter: false },
  { id: 'combobox', nameJa: 'コンボボックス / オートコンプリート', nameEn: 'Combobox', category: 'component',
    description: '入力欄に文字を打つと候補が出る選択UI。長いリストからの絞り込みや住所入力で使う。',
    Demo: ComboboxDemo, hasBeforeAfter: false },
  { id: 'date-picker', nameJa: 'デートピッカー', nameEn: 'Date Picker', category: 'component',
    description: 'カレンダー形式で日付を選ぶUI。当日/選択中/休日などで色分けして示すのが定番。',
    Demo: DatePickerDemo, hasBeforeAfter: false },
  { id: 'color-picker', nameJa: 'カラーピッカー', nameEn: 'Color Picker', category: 'component',
    description: '色を視覚的に選ぶUI。彩度/明度の2D平面と色相のスライダーが基本形。HEX値の入力欄も付ける。',
    Demo: ColorPickerDemo, hasBeforeAfter: false },
  { id: 'file-upload', nameJa: 'ファイルアップロード / ドロップゾーン', nameEn: 'File Upload', category: 'component',
    description: 'ドラッグ&ドロップでファイルを受け取る点線の枠。点線とアップロードアイコンが特徴。',
    Demo: FileUploadDemo, hasBeforeAfter: false },
  { id: 'checkbox', nameJa: 'チェックボックス', nameEn: 'Checkbox', category: 'component',
    description: '複数選択可能なオン/オフ入力。同意・複数条件などに使う。チェック付きはアクセント色で塗る。',
    Demo: CheckboxDemo, hasBeforeAfter: false },
  { id: 'radio', nameJa: 'ラジオボタン', nameEn: 'Radio Button', category: 'component',
    description: '排他選択のオン/オフ入力。1つだけ選べる二択以上の場面で使う。中央に塗りつぶしの丸を表示する。',
    Demo: RadioDemo, hasBeforeAfter: false },
  { id: 'star-rating', nameJa: '星評価 / レーティング', nameEn: 'Star Rating', category: 'component',
    description: '星でレビュー評価を入力・表示するUI。5段階が標準。塗りの色は黄〜橙系が多い。',
    Demo: StarRatingDemo, hasBeforeAfter: false },
  { id: 'pagination', nameJa: 'ページネーション', nameEn: 'Pagination', category: 'component',
    description: '一覧を複数ページに分けて切り替えるUI。前後ボタン＋ページ番号＋現在ページ強調が基本。',
    Demo: PaginationDemo, hasBeforeAfter: false },
  { id: 'search-bar', nameJa: '検索バー', nameEn: 'Search Bar', category: 'component',
    description: '検索キーワードを入力する横長のフォーム。虫眼鏡アイコン＋ショートカット表示が今風。',
    Demo: SearchBarDemo, hasBeforeAfter: false },
  { id: 'bottom-sheet', nameJa: 'ボトムシート', nameEn: 'Bottom Sheet', category: 'component',
    description: 'モバイル画面の下からせり上がってくるシート。共有や追加メニュー、フィルタなどに使う。',
    Demo: BottomSheetDemo, hasBeforeAfter: false },
  { id: 'popover', nameJa: 'ポップオーバー', nameEn: 'Popover', category: 'component',
    description: 'クリックで開く、矢印付きの小さなフローティングパネル。コンテキストメニューや詳細情報に使う。',
    Demo: PopoverDemo, hasBeforeAfter: false },
  { id: 'command-palette', nameJa: 'コマンドパレット', nameEn: 'Command Palette', category: 'component',
    description: '⌘K で開く検索式のコマンドランチャー。VSCode/Linear/Notion などで使われる。',
    Demo: CommandPaletteDemo, hasBeforeAfter: false },
  { id: 'chat-bubble', nameJa: 'チャットバブル', nameEn: 'Chat Bubble', category: 'component',
    description: 'メッセージを吹き出しで表示するUI。送信側は右・受信側は左に寄せ、色も変えるのが定番。',
    Demo: ChatBubbleDemo, hasBeforeAfter: false },
  { id: 'floating-label', nameJa: 'フローティングラベル', nameEn: 'Floating Label', category: 'component',
    description: '入力欄に文字が入るとラベルが小さく上に浮かぶ表現。ラベルとプレースホルダの両立ができる。',
    Demo: FloatingLabelDemo, hasBeforeAfter: true },
  { id: 'banner', nameJa: 'バナー / インフォバー', nameEn: 'Banner', category: 'component',
    description: 'ページ上部に表示される横長の通知帯。アップデート告知や緊急のお知らせに使う。',
    Demo: BannerDemo, hasBeforeAfter: false },
  { id: 'tabs', nameJa: 'タブ', nameEn: 'Tabs', category: 'component',
    description: '排他的なセクションを切り替えるナビゲーション。下線インジケータが動くアンダーラインタブが定番。',
    Demo: TabsDemo, hasBeforeAfter: false },
  { id: 'stat-card', nameJa: '統計カード', nameEn: 'Stat Card', category: 'component',
    description: 'ダッシュボードで使う、ラベル＋大きな数値＋前期比を組み合わせた指標表示カード。',
    Demo: StatCardDemo, hasBeforeAfter: false },
  { id: 'status-indicator', nameJa: 'ステータスインジケータ', nameEn: 'Status Indicator', category: 'component',
    description: '色付きの小さな丸でオンライン状態などを示すUI。緑＝Online、黄＝Awayなどが定番。',
    Demo: StatusIndicatorDemo, hasBeforeAfter: false },
  { id: 'like-button', nameJa: 'いいねボタン / Likeボタン', nameEn: 'Like Button', category: 'component',
    description: 'ハートアイコンで反応を返すボタン。押すと拡大→色が付くアニメーションを付けるのが定番。',
    Demo: LikeButtonDemo, hasBeforeAfter: false },
  { id: 'notification-bell', nameJa: '通知ベル', nameEn: 'Notification Bell', category: 'component',
    description: '未読数バッジ付きのベルアイコン。通知センターへの入り口として、ヘッダー右上に置かれる。',
    Demo: NotificationBellDemo, hasBeforeAfter: false },
  { id: 'inline-edit', nameJa: 'インライン編集', nameEn: 'Inline Edit', category: 'component',
    description: 'クリックでそのまま編集モードに切り替わるテキスト表示。タイトル変更などに使う。',
    Demo: InlineEditDemo, hasBeforeAfter: false },
  { id: 'tag-input', nameJa: 'タグ入力', nameEn: 'Tag Input', category: 'component',
    description: '入力するとチップ化されて並ぶ入力フィールド。タグ付けやメール宛先入力に使う。',
    Demo: TagInputDemo, hasBeforeAfter: false },
  { id: 'code-block', nameJa: 'コードブロック', nameEn: 'Code Block', category: 'component',
    description: 'シンタックスハイライト付きのコード表示エリア。ウィンドウ風のヘッダー（信号機ドット）が定番。',
    Demo: CodeBlockDemo, hasBeforeAfter: false },
  { id: 'tree-view', nameJa: 'ツリービュー', nameEn: 'Tree View', category: 'component',
    description: '階層構造を折りたたみ可能なツリーで表示するUI。ファイルエクスプローラなどで使う。',
    Demo: TreeViewDemo, hasBeforeAfter: false },
  { id: 'kanban-card', nameJa: 'カンバンカード / ボード', nameEn: 'Kanban Board', category: 'component',
    description: 'Todo/Doing/Done など列を分けてカードを動かすタスク管理UI。Trelloが代表例。',
    Demo: KanbanCardDemo, hasBeforeAfter: false },
  { id: 'pricing-card', nameJa: '料金カード', nameEn: 'Pricing Card', category: 'component',
    description: '単体の料金プランを表示するカード。価格を大きく、機能一覧と申し込みボタンを並べる。',
    Demo: PricingCardDemo, hasBeforeAfter: false },
  { id: 'logo-cloud', nameJa: 'ロゴクラウド', nameEn: 'Logo Cloud', category: 'component',
    description: '導入企業や利用ロゴを横に並べたセクション。彩度を落として地味に置くのが今風。',
    Demo: LogoCloudDemo, hasBeforeAfter: false },
  { id: 'testimonial', nameJa: 'お客様の声 / テスティモニアル', nameEn: 'Testimonial', category: 'component',
    description: '引用符＋本人写真＋肩書きで構成された推薦コメント。信頼感を増すLPの定番要素。',
    Demo: TestimonialDemo, hasBeforeAfter: false },
  { id: 'loading-bar', nameJa: 'ローディングバー（上部）', nameEn: 'Top Loading Bar', category: 'component',
    description: '画面上端に細く伸びるローディングインジケータ。SPAのページ遷移時に使う（YouTube/GitHubなど）。',
    Demo: LoadingBarDemo, hasBeforeAfter: false },
  { id: 'toggle-group', nameJa: 'トグルグループ', nameEn: 'Toggle Group', category: 'component',
    description: '複数の独立したオン/オフボタンを横並びにまとめたUI。エディタの太字/斜体/下線などで使う。',
    Demo: ToggleGroupDemo, hasBeforeAfter: false },
  { id: 'drawer', nameJa: 'ドロワー', nameEn: 'Drawer', category: 'component',
    description: '画面端からスライドして出てくるパネル。Sidebarより一時的に開閉する使い方が多い。',
    Demo: DrawerDemo, hasBeforeAfter: true },
  { id: 'range-slider', nameJa: 'レンジスライダー', nameEn: 'Range Slider', category: 'component',
    description: '2つのつまみで範囲を選ぶスライダー。価格レンジや日付期間の指定に使う。',
    Demo: RangeSliderDemo, hasBeforeAfter: false },
  { id: 'multi-select', nameJa: 'マルチセレクト', nameEn: 'Multi-select', category: 'component',
    description: '複数項目を選択し、選択済みをチップで表示する選択UI。タグ/カテゴリ選択で使う。',
    Demo: MultiSelectDemo, hasBeforeAfter: false },
  { id: 'number-stepper', nameJa: '数値ステッパー', nameEn: 'Number Stepper', category: 'component',
    description: '＋／− ボタンで数値を増減する入力UI。商品の個数選択などで使う。',
    Demo: NumberStepperDemo, hasBeforeAfter: false },
  { id: 'lightbox', nameJa: 'ライトボックス', nameEn: 'Lightbox', category: 'component',
    description: 'サムネイルをクリックすると、暗い背景に画像が大きく表示されるUI。ギャラリーで使う。',
    Demo: LightboxDemo, hasBeforeAfter: false },
  { id: 'textarea', nameJa: 'テキストエリア', nameEn: 'Textarea', category: 'component',
    description: '複数行の自由入力フィールド。リサイズハンドル付きが多い。',
    Demo: TextareaDemo, hasBeforeAfter: false },
  { id: 'input-group', nameJa: 'インプットグループ', nameEn: 'Input Group', category: 'component',
    description: 'テキスト入力の前後にアイコンや接頭辞・接尾辞、ボタンを連結したフィールド。',
    Demo: InputGroupDemo, hasBeforeAfter: false },
  { id: 'otp-input', nameJa: 'OTP入力', nameEn: 'OTP Input', category: 'component',
    description: 'ワンタイムパスワード用の1文字ずつ区切られた数桁の入力ボックス。',
    Demo: OtpInputDemo, hasBeforeAfter: false },
  { id: 'password-strength', nameJa: 'パスワード強度メーター', nameEn: 'Password Strength Meter', category: 'component',
    description: '入力中のパスワード強度を弱/中/強で可視化するバー。',
    Demo: PasswordStrengthDemo, hasBeforeAfter: true },
  { id: 'date-range-picker', nameJa: 'デートレンジピッカー', nameEn: 'Date Range Picker', category: 'component',
    description: '開始日と終了日を1つのカレンダーで選択するピッカー。',
    Demo: DateRangePickerDemo, hasBeforeAfter: false },
  { id: 'time-picker', nameJa: 'タイムピッカー', nameEn: 'Time Picker', category: 'component',
    description: '時・分・秒を選択する入力UI。ダイアル式とリスト式がある。',
    Demo: TimePickerDemo, hasBeforeAfter: false },
  { id: 'phone-input', nameJa: 'フォンインプット', nameEn: 'Phone Input', category: 'component',
    description: '国コード選択付きの電話番号入力。国旗フラグが付属することが多い。',
    Demo: PhoneInputDemo, hasBeforeAfter: false },
  { id: 'rich-text-editor', nameJa: 'リッチテキストエディタ', nameEn: 'Rich Text Editor', category: 'component',
    description: 'ツールバー付きの装飾可能なエディタ。WYSIWYG編集を提供。',
    Demo: RichTextEditorDemo, hasBeforeAfter: false },
  { id: 'markdown-editor', nameJa: 'マークダウンエディタ', nameEn: 'Markdown Editor', category: 'component',
    description: '編集ペインとプレビューペインを分割表示するエディタ。',
    Demo: MarkdownEditorDemo, hasBeforeAfter: false },
  { id: 'menubar', nameJa: 'メニューバー', nameEn: 'Menubar', category: 'component',
    description: 'デスクトップアプリ風の水平メニュー帯。ファイル/編集/表示など。',
    Demo: MenubarDemo, hasBeforeAfter: false },
  { id: 'context-menu', nameJa: 'コンテキストメニュー', nameEn: 'Context Menu', category: 'component',
    description: '右クリックで表示される文脈依存メニュー。',
    Demo: ContextMenuDemo, hasBeforeAfter: false },
  { id: 'data-table', nameJa: 'データテーブル', nameEn: 'Data Table', category: 'component',
    description: 'ソート・フィルタ・ページング・選択列を備えた表形式UI。',
    Demo: DataTableDemo, hasBeforeAfter: false },
  { id: 'diff-view', nameJa: '差分ビュー', nameEn: 'Diff View', category: 'component',
    description: '2つのコードやテキストの差分を行単位で表示する。',
    Demo: DiffViewDemo, hasBeforeAfter: true },
  { id: 'calendar-component', nameJa: 'カレンダーコンポーネント', nameEn: 'Calendar', category: 'component',
    description: '月間ビューでイベントを格子表示する大型カレンダー。',
    Demo: CalendarComponentDemo, hasBeforeAfter: false },
  { id: 'gantt', nameJa: 'ガントチャート', nameEn: 'Gantt Chart', category: 'component',
    description: 'プロジェクトのタスクを期間バーで時系列表示する図。',
    Demo: GanttDemo, hasBeforeAfter: false },
  { id: 'heatmap', nameJa: 'ヒートマップ', nameEn: 'Heatmap', category: 'component',
    description: 'GitHubコントリビューション風の濃淡で頻度を表す格子。',
    Demo: HeatmapDemo, hasBeforeAfter: false },
  { id: 'description-list', nameJa: '記述リスト', nameEn: 'Description List', category: 'component',
    description: 'ラベルと値のペアを縦または2列で並べる定義リスト（dt/dd）。',
    Demo: DescriptionListDemo, hasBeforeAfter: false },
  { id: 'alert', nameJa: 'アラート', nameEn: 'Alert', category: 'component',
    description: 'ページ内に固定表示される警告/情報バナー。色で意味を伝える。',
    Demo: AlertDemo, hasBeforeAfter: false },
  { id: 'confirm-dialog', nameJa: '確認ダイアログ', nameEn: 'Confirm Dialog', category: 'component',
    description: '「本当に削除しますか？」のYes/No確認モーダル。',
    Demo: ConfirmDialogDemo, hasBeforeAfter: false },
  { id: 'inline-validation', nameJa: 'インライン検証', nameEn: 'Inline Validation', category: 'component',
    description: '入力直下に出るリアルタイムバリデーションメッセージ。',
    Demo: InlineValidationDemo, hasBeforeAfter: false },
  { id: 'audio-player', nameJa: 'オーディオプレイヤー', nameEn: 'Audio Player', category: 'component',
    description: '再生/一時停止/シーク/音量を備えた音声再生UI。',
    Demo: AudioPlayerDemo, hasBeforeAfter: false },
  { id: 'video-player', nameJa: 'ビデオプレイヤー', nameEn: 'Video Player', category: 'component',
    description: '動画再生コントロール一式とサムネイルプレビュー。',
    Demo: VideoPlayerDemo, hasBeforeAfter: false },
  { id: 'image-cropper', nameJa: '画像クロッパー', nameEn: 'Image Cropper', category: 'component',
    description: '画像を矩形/円形にトリミングするUI。',
    Demo: ImageCropperDemo, hasBeforeAfter: false },
  { id: 'avatar-group', nameJa: 'アバターグループ', nameEn: 'Avatar Group', category: 'component',
    description: '重なり合った複数のアバター。最後に「+N」表示。',
    Demo: AvatarGroupDemo, hasBeforeAfter: false },
  { id: 'card', nameJa: 'カード', nameEn: 'Card', category: 'component',
    description: '関連情報を1つの矩形コンテナに集約した汎用パーツ。',
    Demo: CardDemo, hasBeforeAfter: false },
  { id: 'sheet', nameJa: 'シート', nameEn: 'Sheet', category: 'component',
    description: '画面端から滑り込むパネル状コンテナ。Drawerより軽量。',
    Demo: SheetDemo, hasBeforeAfter: false },
  { id: 'divider', nameJa: 'ディバイダー', nameEn: 'Divider', category: 'component',
    description: 'コンテンツ間を区切る水平/垂直の線。ラベル付きも有り。',
    Demo: DividerDemo, hasBeforeAfter: false },
  { id: 'resizable-panel', nameJa: 'リサイズ可能パネル', nameEn: 'Resizable Panel', category: 'component',
    description: '境界をドラッグして幅/高さを変えられる分割ペイン。',
    Demo: ResizablePanelDemo, hasBeforeAfter: false },
  { id: 'callout', nameJa: 'コールアウト / ヒント', nameEn: 'Callout', category: 'component',
    description: '注釈・補足を強調表示する装飾ブロック。左端に色付き縦線。',
    Demo: CalloutDemo, hasBeforeAfter: false },
  { id: 'sparkline', nameJa: 'スパークライン', nameEn: 'Sparkline', category: 'component',
    description: '軸ラベルを持たない極小折れ線グラフ。表セル内に埋め込む。',
    Demo: SparklineDemo, hasBeforeAfter: false },
  { id: 'gauge', nameJa: 'ゲージ / メーター', nameEn: 'Gauge', category: 'component',
    description: '半円や円弧で値の割合を示す計器型インジケータ。',
    Demo: GaugeDemo, hasBeforeAfter: false },
  { id: 'donut-chart', nameJa: 'ドーナツチャート', nameEn: 'Donut Chart', category: 'component',
    description: '中央が空いた円グラフ。中心に合計値を表示できる。',
    Demo: DonutChartDemo, hasBeforeAfter: false },
  { id: 'kpi-tile', nameJa: 'KPIタイル', nameEn: 'KPI Tile', category: 'component',
    description: 'ダッシュボード用の指標カード。数値とミニグラフを含む。',
    Demo: KpiTileDemo, hasBeforeAfter: false },
  { id: 'chat-input', nameJa: 'チャットコンポーザー', nameEn: 'Chat Input', category: 'component',
    description: 'AIチャット向けの送信入力欄。添付・モデル選択を含むことが多い。',
    Demo: ChatInputDemo, hasBeforeAfter: false },
  { id: 'streaming-text', nameJa: 'ストリーミングテキスト', nameEn: 'Streaming Text', category: 'component',
    description: 'LLMの逐次トークン出力を表現するタイピング進行表示。',
    Demo: StreamingTextDemo, hasBeforeAfter: false },
  { id: 'tool-call-card', nameJa: 'ツールコールカード', nameEn: 'Tool Call Card', category: 'component',
    description: 'AIエージェントが呼び出したツール実行状況を示すカード。',
    Demo: ToolCallCardDemo, hasBeforeAfter: false },
  { id: 'inline-suggestion', nameJa: 'インラインサジェスト / ゴーストテキスト', nameEn: 'Inline Suggestion', category: 'component',
    description: 'カーソル後ろにグレーで予測テキストを表示するゴーストテキスト。',
    Demo: InlineSuggestionDemo, hasBeforeAfter: false },
  { id: 'citation-pill', nameJa: 'サイテーションピル', nameEn: 'Citation Pill', category: 'component',
    description: 'AI回答の参照元を上付き番号や小さなピルで示す。',
    Demo: CitationPillDemo, hasBeforeAfter: false },
  { id: 'back-to-top', nameJa: 'バック・トゥ・トップ', nameEn: 'Back to Top', category: 'component',
    description: 'ページ右下に出るページ先頭へのスクロールボタン。',
    Demo: BackToTopDemo, hasBeforeAfter: false },
  { id: 'theme-switcher', nameJa: 'テーマスイッチャー', nameEn: 'Theme Switcher', category: 'component',
    description: 'Light/Dark/System を切替えるトグル。太陽・月・モニターアイコン。',
    Demo: ThemeSwitcherDemo, hasBeforeAfter: false },
];
